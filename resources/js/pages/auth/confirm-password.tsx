import { useEffect, FormEventHandler } from 'react'
import GuestLayout from '@/layouts/guest'
import { Head, useForm } from '@inertiajs/react'

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post(route('password.confirm'))
  }

  return (
    <GuestLayout>
      <Head title="Confirm Password" />

      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </div>
    </GuestLayout>
  )
}
