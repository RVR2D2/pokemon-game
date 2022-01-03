import s from './layout.module.css'

const Layout = ({title, descr, urlBg, colorBg}) => {
	return (
		<section style={{
			backgroundImage: `url(${urlBg})`,
			background: colorBg
		}} className={s.root}>
			<div className={s.wrapper}>
				<article>
					<div className={s.title}>
						{title && <h3>
							{title}
						</h3>}
						<span className={s.separator}></span>
					</div>
					<div className="desc full">
						{descr && <p>
							{descr}
						</p>}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Layout;
