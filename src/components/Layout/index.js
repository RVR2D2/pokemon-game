import s from './layout.module.css'

const Layout = ({title, descr, urlBg, colorBg}) => {
	return (
		<section style={{backgroundImage: `url(${urlBg})`,}} className={s.root}>
			<div style={{background: colorBg}} className={s.wrapper}>
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
