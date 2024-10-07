import React, { useRef, useState } from 'react';
import GuestLayout from "@/layouts/guest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { IconArrowDown, IconArrowRight, IconArrowUp, IconBrandWhatsapp, IconLayout2Filled } from "@tabler/icons-react";
import MyImg from "../img/foto.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from "framer-motion"
import img1 from '../img/bca.png'
import img2 from '../img/mandiri.png'
const WelcomePage = ({ }) => {
	const [stiky, setStiky] = useState(false);
	const [iconWa, setIconWa] = useState(false);
	const cardTemplateRef = useRef(null);
	const cardAtas = useRef(null);

	const changeHeader = () => {
		if (window.scrollY >= 50) {
			setStiky(true);
		} else {
			setStiky(false);
		}
	};

	const changeIcon = () => {
		if (window.scrollY >= 50) {
			setIconWa(true);
		} else {
			setIconWa(false);
		}
	};


	const handleScrollToTemplate = () => {
		cardTemplateRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	const halamanAtas = () => {
		cardAtas.current.scrollIntoView({ behavior: 'smooth' });
	};

	window.addEventListener('scroll', changeHeader);
	window.addEventListener('scroll', changeIcon);
	return (
		<div>
			{/* Halaman bagian page atas */}
			<div ref={cardAtas} className="bg-slate-50  lg:h-screen w-full">
				<motion.div
					initial="hidden"
					animate="show"
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: {
								staggerChildren: 0.3,
								delayChildren: 0.2,
								duration: 0.3,
							}
						}
					}}
					className="flex flex-col md:w-full lg:flex-row p-4 lg:p-16 gap-6"
				>
					{/* Animasi untuk elemen pertama */}
					<div className="w-full md:w-8/12">
						<motion.div variants={{
							hidden: { opacity: 0, y: 50 },
							show: { opacity: 1, y: 0 }
						}}>

							<Card className="rounded-xl border shadow-none p-4 md:w-full lg:w-full md:p-10" style={{ background: "#EFC3AF" }}>
								<CardContent>
									<CardTitle>
										<p className="text-4xl md:text-6xl font-bold " style={{ color: "#6C4E31", maxWidth: "500px" }}>
											Template Design Undangan
										</p>
										<p className="text-sm mt-4 " style={{ color: "#6C4E31" }}>
											Temukan keindahan desain undangan pernikahan impianmu.
										</p>
									</CardTitle>
									<Button className="rounded-full mt-4 md:mt-24 text-white flex gap-2" style={{ background: "#6C4E31" }} onClick={handleScrollToTemplate}>
										Jelajahi Template <IconArrowDown size={18} />
									</Button>
								</CardContent>
							</Card>
						</motion.div>

						{/* Elemen berikutnya */}
						<div className="flex flex-col md:flex-row lg:flex-row gap-6 mt-3 lg:mt-6 md:mt-6">
							{/* Elemen "Edit Sesukamu" */}
							<motion.div
								variants={{
									hidden: { opacity: 0, y: 50 },
									show: { opacity: 1, y: 0 }
								}}
								className="w-full md:w-6/12"
							>
								<Card className="rounded-xl  md:w-8/ shadow-none p-4 md:p-10" style={{ background: "#EFC3AF" }}>
									<CardTitle>
										<div className="flex gap-5">
											<div className="bg-white p-3 rounded-xl items-center">
												<IconLayout2Filled />
											</div>
											<div>
												<p className="text-xl md:text-3xl  text-zinc-600" style={{ color: "#6C4E31" }}>Edit Sesukamu</p>
												<p className="text-zinc-400" style={{ color: "#6C4E31" }}>Unlimited Revisi</p>
											</div>
										</div>
									</CardTitle>
								</Card>
							</motion.div>

							{/* Elemen "100+ Tema Undangan" */}
							<motion.div
								variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
								transition={{ duration: 0.5 }} // Transisi sedikit lebih lambat
								className="w-full md:w-6/12 -mt-3 lg:mt-0 md:mt-0"
							>
								<Card className="rounded-xl border border-pink-200 shadow-none  p-4 md:p-10" style={{ background: "#EFC3AF" }}>
									<CardTitle>
										<div className="flex gap-5">
											<div className="bg-white p-3 rounded-xl items-center">
												<IconLayout2Filled />
											</div>
											<div>
												<p className="text-xl md:text-3xl text-zinc-600" style={{ color: "#6C4E31" }}>100+</p>
												<p className="text-zinc-400" style={{ color: "#6C4E31" }}>Tema Undangan</p>
											</div>
										</div>
									</CardTitle>
								</Card>
							</motion.div>
						</div>
					</div>

					{/* Elemen Carousel di sebelah kanan */}
					<motion.div
						variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}
						className="w-full md:w-4/12 -mt-3 lg:mt-0 md:mt-6"
					>
						<Card className="rounded-xl  border  md:block p-2 h-[550px] flex flex-col justify-between items-center" style={{ background: "#EFC3AF" }}>
							<CardContent>
								<Carousel
									className="w-[300px] rounded-md mt-10 h-[500px]-100 lg:mx-[50px] md:mx-[50px] mx-[0px]">
									<CarouselContent className="flex justify-center ">
										<CarouselItem className="pl-2 md:pl-4 mx-6 md:mx-0 lg:mx-0">
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
							</CardContent>
							<Button className="rounded-full mb-8 md:mt-24 lg:mt-6 text-white flex gap-2" style={{ background: "#6C4E31" }}>
								Lihat Detail <IconArrowRight size={18} />
							</Button>
						</Card>
					</motion.div>
				</motion.div>

			</div>

			{/* bagian card template */}
			<div className='md:p-16 p-4 ' ref={cardTemplateRef} >
				<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
					{/* Dropdown Selects for Category and Color */}
					<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
						{/* Kategori Select */}
						<Select>
							<SelectTrigger className="w-full md:w-[290px] focus-visible:ring-0 focus:ring-0 rounded-xl h-16">
								<SelectValue placeholder="Kategori" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="option1">Option 1</SelectItem>
								<SelectItem value="option2">Option 2</SelectItem>
							</SelectContent>
						</Select>

						{/* Warna Select */}
						<Select>
							<SelectTrigger  className="w-full md:w-[290px] focus-visible:ring-0 focus:ring-0 rounded-xl h-16">
								<SelectValue placeholder="Warna" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="option1">Option 1</SelectItem>
								<SelectItem value="option2">Option 2</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Urutkan Select */}
					<div className="mt- md:mt-0 w-full md:w-auto">
						<Select>
							<SelectTrigger className="w-full md:w-[290px] focus-visible:ring-0 focus:ring-0 rounded-xl h-16">
								<SelectValue placeholder="Urutkan" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="option1">Option 1</SelectItem>
								<SelectItem value="option2">Option 2</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>


				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
					<div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='md:flex lg:flex justify-between mt-3'>
							<p className='md:text-xl lg:text-xl font-semibold'>160 - Belle</p>

							<span >
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full h-7 md:h-9 w-full mt-1 md:mt-3 lg:mt-3 text-white flex gap-2"
							style={{ background: "#6C4E31" }}
						>
							Lihat Template
						</Button>
					</div>
					<div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='md:flex lg:flex justify-between mt-3'>
							<p className='md:text-xl lg:text-xl font-semibold'>160 - Belle</p>

							<span >
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full h-7 md:h-9 w-full mt-1 md:mt-3 lg:mt-3 text-white flex gap-2"
							style={{ background: "#6C4E31" }}
						>
							Lihat Template
						</Button>
					</div>

					<div >
						<Card className='rounded-xl '>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='md:flex lg:flex justify-between mt-3'>
							<p className='md:text-xl lg:text-xl font-semibold'>160 - Belle</p>

							<span >
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full h-7 md:h-9 w-full mt-1 md:mt-3 lg:mt-3 text-white flex gap-2"
							style={{ background: "#6C4E31" }}
						>
							Lihat Template
						</Button>
					</div><div >
						<Card className='rounded-xl'>
							<img src={MyImg} alt="" className='rounded-xl' />
						</Card>
						<div className='md:flex lg:flex justify-between mt-3'>
							<p className='md:text-xl lg:text-xl font-semibold'>160 - Belle</p>

							<span >
								<p>Rp. 100.000</p>
							</span>

						</div>
						<Button
							className="rounded-full h-7 md:h-9 w-full mt-1 md:mt-3 lg:mt-3 text-white flex gap-2"
							style={{ background: "#6C4E31" }}
						>
							Lihat Template
						</Button>
					</div>
				</div>
				<div className=' flex justify-center mt-6'>
					<Button
						style={{ borderColor: "#6C4E31" }}
						className="rounded-full px-8 py-2 mt-3 border-2 hover:bg-slate-50 text-[#6C4E31] bg-transparent flex gap-2"
					>
						Lihat lebih banyak
					</Button>

				</div>
			</div>

			{/* Footer */}
			<div style={{ background: "#EFC3AF" }}>
				{/* Section pertama */}
				<div className='grid grid-cols-1 md:grid-cols-2 p-8 md:p-16'>
					<div className='flex flex-col h-full'>
						<div className='flex-grow border-r-0 md:border-r-2 h-full border-pink-500'>
							<p className='text-lg md:text-xl font-semibold' style={{ color: "#6C4E31" }}>Viding</p>
							<p className='mt-3 text-sm md:text-base text-zinc-500' style={{ color: "#6C4E31" }}>
								Viding adalah One Stop Platform Digitalisasi Pernikahan yang membuat pernikahan kamu menjadi lebih efisien, efektif, bermakna, dan Up to Date.
							</p>
							<p className='mt-3 text-sm md:text-base' style={{ color: "#6C4E31" }}>
								Terdaftar di Kementerian Komunikasi dan Informatika Republik Indonesia
							</p>
						</div>
					</div>

					<div className='mt-6 md:mt-0  md:px-12'>
						<p className='text-lg md:text-xl font-semibold ' style={{ color: "#6C4E31" }}>Metode Pembayaran</p>

						<div className='flex gap-2'>
							<img src={img1} className='w-[150px] h-[60px] bg-white px-6 rounded-md' />
							<img src={img2} className='w-[150px] h-[60px] bg-white px-6 rounded-md' />
						</div>
					</div>
				</div>

				{/* Section kedua */}

			</div>

			{/* icon chat whatshapp */}
			<div>
				<span   onClick={halamanAtas}>
					<div className={`hover:cursor-pointer text-white fixed bottom-24 right-7 rounded-full p-1 transition-opacity duration-500 ${stiky ? 'opacity-100' : 'opacity-0'}`} style={{ background: "#6C4E31" }}>
						<IconArrowUp size={33} />
					</div>
				</span>
				{/* style={{ background: "#6C4E31" }} */}
				<a href="https://wa.me/085940466426">
					<div className={iconWa ? 'hidden transition-opacity duration-500 opacity-100':'transition-opacity text-white duration-800 flex items-center animate-pulse gap-2 fixed bottom-8 right-7 z-50 px-4 py-2 rounded-full hover:cursor-pointer'} style={{ background: "#6C4E31" }}>
						<IconBrandWhatsapp size={35} strokeWidth={1.5} />
						<p>Chat</p>
					</div>
				</a>
			</div>
		</div>
	);
};
WelcomePage.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
export default WelcomePage;
