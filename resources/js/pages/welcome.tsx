import React from 'react';
import GuestLayout from "@/layouts/guest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { IconArrowDown, IconLayout2Filled } from "@tabler/icons-react";
import MyImg from "../img/foto.png";
const WelcomePage = ({}) => {
	return (
		<div className="bg-slate-50 h-screen w-full">
		<div className="flex p-16 gap-6">
			<div className="w-7/12">
				<Card
					className="rounded-xl border border-gray-200 shadow-none p-10"
					style={{ background: "#FEF3F9" }}
				>
					<CardContent>
						<CardTitle>
							<p
								className="text-6xl font-bold"
								style={{
									color: "#E91C8A",
									maxWidth: "500px",
								}}
							>
								Template Design Undangan
							</p>
							<p className="text-sm mt-4 text-gray-600">
								Temukan keindahan desain undangan
								pernikahan impianmu.
							</p>
						</CardTitle>
						<Button
							className="rounded-full mt-24 text-white flex gap-2"
							style={{ background: "#EB578B" }}
						>
							Jelajahi Template{" "}
							<IconArrowDown size={18} />
						</Button>
					</CardContent>
				</Card>

				<div className="flex gap-6 mt-6">
					<div className="w-7/12">
						<Card
							className="rounded-xl border border-gray-200 shadow-none p-10"
							style={{ background: "#FEF3F9" }}
						>
							<CardTitle>
								<div className="flex gap-5">
									<div className="bg-white p-3 rounded-xl items-center">
										<IconLayout2Filled className="mt-" />
									</div>
									<div>
										<p className="text-3xl text-zinc-600">
											Edit Sesukamu
										</p>
										<p className=" text-zinc-400">
											Unlimited Revisi
										</p>
									</div>
								</div>
							</CardTitle>
						</Card>
					</div>

					<div className="w-7/12">
						<Card
							className="rounded-xl border border-gray-200 shadow-none p-10"
							style={{ background: "#FEF4F9" }}
						>
							<CardTitle>
								<div className="flex gap-5">
									<div className="bg-white p-3 rounded-xl items-center">
										<IconLayout2Filled className="mt-" />
									</div>
									<div>
										<p className="text-3xl text-zinc-600">
											100+
										</p>
										<p className=" text-zinc-400">
											Tema Undangan
										</p>
									</div>
								</div>
							</CardTitle>
						</Card>
					</div>
				</div>
			</div>

			<div className="w-4/12">
			<Card
className="rounded-xl border border-gray-200 p-5 h-[550px] flex flex-col justify-between items-center"
style={{ background: "#EB578B" }}
>
<CardTitle>
<Carousel className="w-full h-auto mx-10">
	<CarouselContent className="flex justify-center">
		<CarouselItem className="pl-2 md:pl-4">
			<img
				src={MyImg}
				alt=""
				className="w-[280px] rounded-md"
			/>
		</CarouselItem>
		<CarouselItem className="pl-2 md:pl-4">
			<img
				src={MyImg}
				alt=""
				className="w-[280px] rounded-md"
			/>
		</CarouselItem>
		<CarouselItem className="pl-2 md:pl-4">
			<img
				src={MyImg}
				alt=""
				className="w-[280px] rounded-md"
			/>
		</CarouselItem>
	</CarouselContent>
</Carousel>
</CardTitle>
{/* Button placed outside of CardTitle to ensure it's below the images */}
<Button
className="rounded-full text-white flex gap-2"
style={{ background: "#EB578B" }}
>
Lihat Detail <IconArrowDown size={18} />
</Button>
</Card>

			</div>
		</div>
	</div>
	);
};
WelcomePage.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
export default WelcomePage;
