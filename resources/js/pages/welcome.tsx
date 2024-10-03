import React from 'react';
import GuestLayout from "@/layouts/guest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { IconArrowDown, IconArrowRight, IconLayout2Filled } from "@tabler/icons-react";
import MyImg from "../img/foto.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const WelcomePage = ({ }) => {
	return (
		<div>
			{/* Halaman bagian page atas */}
			{/* ariants={{hidden:{opacity:0},show:{opacity:1}}} */}
			<div className="bg-slate-50 md:h-screen w-full">
				<div className="flex flex-col md:flex-row p-4 md:p-16 gap-6">
					<div className="w-full md:w-8/12">
						<Card className="rounded-xl border border-pink-200 shadow-none p-4 md:p-10" style={{ background: "#FEF3F9" }}>
							<CardContent>
								<CardTitle>
									<p className="text-4xl md:text-6xl font-bold" style={{ color: "#E91C8A", maxWidth: "500px" }}>
										Template Design Undangan
									</p>
									<p className="text-sm mt-4 text-gray-600">
										Temukan keindahan desain undangan pernikahan impianmu.
									</p>
								</CardTitle>
								<Button className="rounded-full mt-4 md:mt-24 text-white flex gap-2" style={{ background: "#EB578B" }}>
									Jelajahi Template <IconArrowDown size={18} />
								</Button>
							</CardContent>
						</Card>

						<div className="flex flex-col md:flex-row gap-6 mt-6">
							<div className="w-full md:w-6/12">
								<Card className="rounded-xl border-pink-200 shadow-none p-4 md:p-10" style={{ background: "#FEF3F9" }}>
									<CardTitle>
										<div className="flex gap-5">
											<div className="bg-white p-3 rounded-xl items-center">
												<IconLayout2Filled />
											</div>
											<div>
												<p className="text-xl md:text-3xl  text-zinc-600">Edit Sesukamu</p>
												<p className="text-zinc-400">Unlimited Revisi</p>
											</div>
										</div>
									</CardTitle>
								</Card>
							</div>

							<div className="w-full md:w-6/12">
								<Card className="rounded-xl border border-pink-200 shadow-none  p-4 md:p-10" style={{ background: "#FEF4F9" }}>
									<CardTitle>
										<div className="flex gap-5">
											<div className="bg-white p-3 rounded-xl items-center">
												<IconLayout2Filled />
											</div>
											<div>
												<p className="text-xl md:text-3xl text-zinc-600">100+</p>
												<p className="text-zinc-400">Tema Undangan</p>
											</div>
										</div>
									</CardTitle>
								</Card>
							</div>
						</div>
					</div>

					<div className="w-full md:w-4/12">
						<Card className="rounded-xl border border-pink-500 p-5 h-[550px] flex flex-col justify-between items-center" style={{ background: "#EB578B" }}>
							<CardTitle>
								<Carousel className="w-full h-auto mx-10">
									<CarouselContent className="flex justify-center">
										<CarouselItem className="pl-2 md:pl-4">
											<img src={MyImg} alt="" className="w-[280px] rounded-md" />
										</CarouselItem>
										<CarouselItem className="pl-2 md:pl-4">
											<img src={MyImg} alt="" className="w-[280px] rounded-md" />
										</CarouselItem>
										<CarouselItem className="pl-2 md:pl-4">
											<img src={MyImg} alt="" className="w-[280px] rounded-md" />
										</CarouselItem>
									</CarouselContent>
								</Carousel>
							</CardTitle>
							<Button className="rounded-full -mt- md:mt-0 bg-pink-100 flex gap-2 hover:bg-pink-200 text-pink-500">
								Lihat Detail <IconArrowRight size={18} />
							</Button>
						</Card>
					</div>
				</div>



				{/* Bagian Template */}
			</div>

			{/* bagian template */}
			<div className='md:p-16 p-4 '>
				<div className="flex flex-col md:flex-row justify-between gap-6">
					<div className="flex gap-4">
						<div>
							<Select>
								<SelectTrigger className="w-[155px] md:w-[290px] focus-visible:ring-0 focus:ring-pink-400 rounded-xl h-16">
									<SelectValue placeholder="Kategori" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem>
										{/* Kategori options here */}
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<Select>
								<SelectTrigger className="w-[155px] md:mt-0 md:w-[290px] rounded-xl h-16">
									<SelectValue placeholder="Warna" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem>
										{/* Warna options here */}
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="mt-4 md:mt-0">
						<Select>
							<SelectTrigger className="md:mt-0 -mt-8 md:w-[290px] rounded-xl h-16">
								<SelectValue placeholder="Urutkan" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem>
									{/* Urutkan options here */}
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>



				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
					<div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='flex justify-between mt-3'>
							<p className='text-xl font-semibold'>160 - Belle</p>

							<span>
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full w-full mt-3 text-white flex gap-2"
							style={{ background: "#EB578B" }}
						>
							Lihat Template
						</Button>
					</div>
					<div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='flex justify-between mt-3'>
							<p className='text-xl font-semibold'>160 - Belle</p>

							<span>
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full w-full mt-3 text-white flex gap-2"
							style={{ background: "#EB578B" }}
						>
							Lihat Template
						</Button>
					</div>

					<div >
						<Card className='rounded-xl '>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='flex justify-between mt-3'>
							<p className='text-xl font-semibold'>160 - Belle</p>

							<span>
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full w-full mt-3 text-white flex gap-2"
							style={{ background: "#EB578B" }}
						>
							Lihat Template
						</Button>
					</div><div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='flex justify-between mt-3'>
							<p className='text-xl font-semibold'>160 - Belle</p>

							<span>
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full w-full mt-3 text-white flex gap-2"
							style={{ background: "#EB578B" }}
						>
							Lihat Template
						</Button>
					</div>
				</div>
				<div className=' flex justify-center mt-6'>
					<Button
						className="rounded-full px-8 py-2 mt-3 hover:bg-none text-pink-500 border border-pink-500 hover:bg-slate-50 bg-transparent flex gap-2"
					>
						Lihat lebih banyak
					</Button>

				</div>
			</div>

			{/* Footer */}
			<div className='bg-pink-100'>
				<div className='grid grid-cols-2 p-16'>
					<div className='flex flex-col h-full'>
						<div className='flex-grow border-r-2 h- border-pink-500'>
							<p className='text-xl font-semibold text-pink-500'>Viding</p>
							<p className='mt-3 text-zinc-500'>
								Viding adalah One Stop Platform Digitalisasi Pernikahan yang membuat pernikahan kamu menjadi lebih efisien, efektif, bermakna, dan Up to Date.
							</p>
							<p className='mt-3 text-zinc-400'>
								Terdaftar di Kementerian Komunikasi dan Informatika Republik Indonesia
							</p>
						</div>
					</div>



					<div className='px-12'>
						<p className='text-xl font-semibold text-pink-500'>Metode Pembayaran</p>
					</div>
				</div>

				<div className='grid grid-cols-4 p-16'>
					<div className='flex flex-col h-full'>
						<div className='flex-grow border-r-2 h- border-pink-500'>
							<p className='text-xl text-pink-500'>Prdoct</p>
							<p className='mt-3 text-zinc-500'>

							</p>

						</div>
					</div>

					<div className='flex flex-col h-full border-t '>
						<div className='flex-grow px-7 border-r-2  border-pink-500'>
							<p className='text-xl  text-pink-500'>Bantuan</p>
							<p className='mt-3 text-zinc-500'>

							</p>

						</div>
					</div>

					<div className='flex flex-col h-full border-t '>
						<div className='flex-grow px-7 border-r-2  border-pink-500'>
							<p className='text-xl  text-pink-500'>Resources</p>
							<p className='mt-3 text-zinc-500'>

							</p>

						</div>
					</div>

					<div className='flex flex-col h-full border-t '>
						<div className='flex-grow px-7 border-r-2  border-pink-500'>
							<p className='text-xl  text-pink-500'>Ikuti Kami</p>
							<p className='mt-3 text-zinc-500'>

							</p>

						</div>
					</div>

				</div>
			</div>
		</div>
	);
};
WelcomePage.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
export default WelcomePage;
