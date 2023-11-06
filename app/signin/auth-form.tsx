'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'



export default function AuthForm() {
  const supabase = createClientComponentClient()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      // appearance={{ theme: ThemeSupa }}
      appearance={{
        style: {
          button: {
            background: '#000',
            color: '#fff',
            border: '2px solid #000',
            padding: '0px 20px',
            borderRadius: '5px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
          },
          anchor: {
            color: '#000',
            textDecoration: 'none',
          },
          container: {
            backgroundColor: '#fff',
            color: '#000',
            padding: '20px',
            // border: '1px solid #000',
          },
          divider: {
            borderTop: '2px solid #000',
            margin: '0px 0',
          },
          label: {
            color: '#000',
            fontWeight: 'bold',
          },
          input: {
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #000',
            padding: '5px',
            borderRadius: '3px',
          },
          loader: {
            border: '6px solid #fff',
            borderTop: '6px solid #000',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            animation: 'spin 1s linear infinite',
          },
          message: {
            // backgroundColor: '#fff',
            color: '#000',
            padding: '10px',
            borderRadius: '5px',
          },
        },
      }}
      
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  )
}