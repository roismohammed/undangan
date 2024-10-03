import {FormEventHandler, useEffect} from 'react'
import GuestLayout from '@/layouts/guest'
import {Head, useForm} from '@inertiajs/react'
import TextInput from '@/components/form/text-input'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import SwitchInput from '@/components/form/switch-input'

const Login = (
	{
		status,
		canResetPassword,
	}: {
		status?: string
		canResetPassword: boolean
	}) => {
	const {data, setData, post, processing, errors, reset} = useForm({
		email: '',
		password: '',
		remember: false,
	})

	useEffect(() => {
		return () => {
			reset('password')
		}
	}, [])

	const submit: FormEventHandler = e => {
		e.preventDefault()
		post(route('login'))
	}

	return (
		<div className={'flex justify-center h-screen max-h-[95vh] w-full items-center'}>
			<Head title="Log in" />
			<div className="w-full md:w-3/12 p-10 shadow-none md:shadow-md border-none md:border border-slate-100 rounded-md">
				{status && (
					<div className="mb-4 font-medium text-sm text-green-600">{status}</div>
				)}
				<div className="login-page-title mb-3">
					<h1 className={'text-primary text-2xl font-bold'}>
						Login<span className={'text-2xl text-yellow-300'}>.</span>
					</h1>
					<p className={'text-sm'}>Selamat Datang Kembali</p>
				</div>
				<form onSubmit={submit}>
					<div className="form-group">
						<Label htmlFor="email">Email</Label>
						<TextInput
							type="email"
							name="email"
							errors={errors.email}
							placeholder="Masukan Email"
							onChange={event => setData('email', event.target.value)}
							value={data.email}
						/>
					</div>
					<div className="form-group">
						<Label htmlFor={'password'}>Password</Label>
						<TextInput
							type="password"
							name="password"
							errors={errors.password}
							placeholder="Masukan Password"
							onChange={event => setData('password', event.target.value)}
							value={data.password}
						/>
					</div>
					<div className="login-footer flex justify-between mt-6">
						<div className="checkbox-wrapper flex gap-2 items-center">
							<SwitchInput name={'remember'} />
							<Label htmlFor={'remember'}>Remember Me</Label>
						</div>
						<div className="button-wrapper">
							<Button>Login</Button>
						</div>
					</div>
				</form>
				<div className="footer text-center mt-10 text-sm font-light">
					Belum punya akun? <a
					href={route('register')}
					className={'font-semibold text-primary'}
				>Regiter sekarang</a>
				</div>
			</div>
		</div>
	)
}

Login.layout = (page: any) => <GuestLayout>{page}</GuestLayout>
export default Login
