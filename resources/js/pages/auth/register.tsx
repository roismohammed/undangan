import React, { useEffect, FormEventHandler } from 'react'
import GuestLayout from '@/layouts/guest'
import { Head, Link, useForm } from '@inertiajs/react'
import {Label} from "@/components/ui/label";
import TextInput from "@/components/form/text-input";
import SwitchInput from "@/components/form/switch-input";
import {Button} from "@/components/ui/button";

const Register =() => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
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

    post(route('register'))
  }

  return (
      <GuestLayout>
        <Head title="Log in" />
        <div className={'flex justify-center h-screen max-h-[95vh] w-full items-center'}>
          <div className="w-full md:w-3/12 p-10 shadow-none md:shadow-md border-none md:border border-slate-100 rounded-md">
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
            )}
            <div className="register-page-title mb-3">
              <h1 className={'text-primary text-2xl font-bold'}>
                Register
                <span className={'text-2xl text-yellow-300'}>.</span>
              </h1>
              <p className={'text-sm'}>Selamat Datang Kembali</p>
            </div>

            <form onSubmit={submit}>
              <div className=" justify-center items-center ">
                <div className="form-group">
                  <Label htmlFor="username">Nama Lengkap</Label>
                  <TextInput
                      name={'name'}
                      placeholder={'Masukan Nama Lengkap'}
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      errors={errors.name}
                      type="text"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="email">Email</Label>
                  <TextInput
                      type="text"
                      name="email"
                      value={data.email}
                      onChange={e => setData('email', e.target.value)}
                      placeholder="Masukkan Email Anda"
                      errors={errors.email}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="email">Password</Label>
                  <TextInput
                      type="password"
                      name="password"
                      placeholder="Masukan Password"
                      errors={errors.password}
                      value={data.password}
                      onChange={e => setData('password', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="password">Confirm Password</Label>
                  <TextInput
                      type="password"
                      name="password_confirmation"
                      placeholder="Masukan Password Kembali"
                      errors={errors.password_confirmation}
                      value={data.password_confirmation}
                      onChange={e =>
                          setData('password_confirmation', e.target.value)
                      }
                  />
                </div>

                <div className="form-group flex justify-between items-center mt-8">
                  <div className="text-sm flex gap-1">
                    <span>Sudah Punya Akun?</span>
                    <Link
                        href={route('login')}
                        className="font-semibold text-primary"
                    >
                      Login
                    </Link>
                  </div>

                  <Button>Daftar Sekarang</Button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </GuestLayout>
  )
}

Register.layout = (page: React.ReactNode) => <GuestLayout>{page}</GuestLayout>

export default Register
