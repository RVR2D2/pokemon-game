import s from './layout.module.css'

const Layout = ({title, children, urlBg, colorBg, colorTitle}) => {
	const sectionStyle = {}
	const sectionTitleColor = {}
	
	if (urlBg) {
		sectionStyle.backgroundImage = `url(${urlBg})`
	}
	
	if (colorBg) {
		sectionStyle.background = colorBg
	}
	
	if (colorTitle) {
		sectionTitleColor.color = colorTitle
	}
	
	return (
		<section style={sectionStyle} className={s.root}>
			<div className={s.wrapper}>
				<article>
					<div style={sectionTitleColor} className={s.title}>
						{title && <h3>
							{title}
						</h3>}
						<span className={s.separator}></span>
					</div>
					<div className={`${s.desc} ${s.full}`}>
						{children && <p>
							{children}
						</p>}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Layout;
