import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import defaultAvatar from "~/assets/img/default-avatar.png";
import { useInView } from "~/libs/hooks/hooks.js";

import { Image } from "../image/image.js";
import styles from "./styles.module.css";

type Properties = {
	data: { img: null | string; name: string; review: string }[];
};

const Carousel: React.FC<Properties> = ({ data }: Properties) => {
	const { inView, ref } = useInView({
		threshold: 0.05,
		triggerOnce: true,
	});

	return (
		<div
			className={`${styles["container"]} ${inView && styles["active"]}`}
			ref={ref}
		>
			<div className={styles["container-wrapper"]}>
				<Swiper
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						480: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
					}}
					modules={[Pagination, Scrollbar, A11y]}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					spaceBetween={40}
				>
					{data.map((item) => (
						<SwiperSlide key={item.name}>
							<div className={styles["slider"]}>
								<div className={styles["image-wrapper"]}>
									<Image
										alt="avatar"
										className={styles["image"]}
										key={item.img ?? defaultAvatar}
										shape="circle"
										src={item.img ?? defaultAvatar}
									/>
								</div>
								<div className={styles["content-wrapper"]}>
									<p className={styles["title"]}>{item.name}</p>
									<p className={styles["text"]}>{item.review}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export { Carousel };
