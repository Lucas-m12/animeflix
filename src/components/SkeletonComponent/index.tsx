import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonComponent = () => {
	return (
		<div 
			style={{
				textAlign: 'center',
				height: 100,
				width: 100
			}}
		>
			<SkeletonTheme baseColor="#5e6c77" highlightColor="#a9b7c1">
				<p>
					<Skeleton count={3} duration={2} width={22} />
				</p>
			</SkeletonTheme>
			{/* <div className="card">
				<div className="card-inside">
					<Skeleton height="200px" width="290px" />
					<h4 className="card-title">
						<Skeleton height={36} width={'80%'} />
					</h4>
					<p className="card-channel">
						<Skeleton width={'60%'} />
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-inside">
					<Skeleton height="200px" />
					<h4 className="card-title">
						<Skeleton height={36} width={'80%'} />
					</h4>
					<p className="card-channel">
						<Skeleton width={'60%'} />
					</p>
				</div>
			</div>
			<div className="card">
				<div className="card-inside">
					<Skeleton height="200px" />
					<h4 className="card-title">
						<Skeleton height={36} width={'80%'} />
					</h4>
					<p className="card-channel">
						<Skeleton width={'60%'} />
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default SkeletonComponent;