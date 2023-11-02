from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import psycopg2

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app

# Define the database connection parameters
database = "neondb"
user = "pascal"
password = "uAZg04eUXKhO"
host = "ep-tiny-voice-59659868.us-east-2.aws.neon.tech"
port = 5432

@app.route('/account', methods=['POST'])
def create_account():
    try:
        # Establish a connection to the database
        connection = psycopg2.connect(
            database=database,
            user=user,
            password=password,
            host=host,
            port=port
        )

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the user information to insert (without user_id)
        user_data = {
            "user_name": request.json.get("user_name"),
            "first_name": request.json.get("first_name"),
            "last_name": request.json.get("last_name"),
            "password_hash": request.json.get("password_hash"),  # You should store a securely hashed password
            "location": request.json.get("location")
        }

        # Insert the new user into the "account" table
        cursor.execute(
            "INSERT INTO account (user_name, first_name, last_name, password_hash, location) VALUES (%(user_name)s, %(first_name)s, %(last_name)s, %(password_hash)s, %(location)s) RETURNING user_id",
            user_data
        )

        # Retrieve the automatically generated user_id
        user_id = cursor.fetchone()[0]

        # Commit the transaction
        connection.commit()

        # Close the cursor and connection
        cursor.close()
        connection.close()

        return jsonify({"message": f"User added successfully with user_id: {user_id}"}), 201

    except psycopg2.Error as error:
        return jsonify({"error": "Error connecting to PostgreSQL"}), 500

if __name__ == '__main__':
    app.run(debug=True)