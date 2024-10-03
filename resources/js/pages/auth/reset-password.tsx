import { FormEventHandler, useEffect } from 'react'
import GuestLayout from '@/layouts/guest'
import { Head, useForm } from '@inertiajs/react'

export default function ResetPassword({
  token,
  email,
}: {
  token: string
  email: string
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post(route('password.store'))
  }

  return (
    <GuestLayout>
      <Head title="Reset Password" />
    </GuestLayout>
  )
}
