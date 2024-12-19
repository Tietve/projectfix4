import { memo } from 'react';

import './navbar.css';

const Navbar = () => {
	return (
		<header style={{ width: '100%', height: 90, top: 0, display: 'flex' }}>
			<a class='icon-logo-class' href='/'>
				<svg
					width='136'
					height='35'
					viewBox='0 0 136 35'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M24.6697 7.11704C24.6697 7.13139 24.6697 7.13139 24.6697 7.14574C24.311 7.13139 23.9523 7.11704 23.5649 7.11704H12.5161L14.0515 5.59605C15.4577 4.17551 17.0074 2.86975 18.801 2.86975C20.609 2.86975 22.1587 4.17551 23.5649 5.59605L24.3684 6.39959C24.5693 6.58613 24.6697 6.84441 24.6697 7.11704Z'
						fill='white'
					/>
					<path
						d='M29.9046 18.8965C30.4642 18.8965 30.909 18.4373 30.909 17.8634V16.6007C30.909 10.9616 29.1871 9.25403 23.5623 9.25403H14.5225H10.8779C5.25312 9.25403 3.53125 10.9759 3.53125 16.6007V17.2177C3.53125 17.7916 3.97607 18.2364 4.53568 18.2364C5.74099 18.2364 6.70237 19.2122 6.70237 20.4031C6.70237 21.5941 5.74099 22.5842 4.53568 22.5842C3.97607 22.5842 3.53125 23.029 3.53125 23.603V24.22C3.53125 29.8591 5.25312 31.5666 10.8779 31.5666H14.5081H23.548C29.1728 31.5666 30.8947 29.8448 30.8947 24.22C30.8947 23.6604 30.4498 23.2012 29.8902 23.2012C28.6849 23.2012 27.7235 22.2398 27.7235 21.0488C27.7379 19.8579 28.6993 18.8965 29.9046 18.8965ZM15.5269 27.0611C15.5269 27.6207 15.0678 28.0798 14.5081 28.0798C13.9486 28.0798 13.4894 27.6207 13.4894 27.0611V23.2155C13.4894 22.6559 13.9486 22.1968 14.5081 22.1968C15.0678 22.1968 15.5269 22.6559 15.5269 23.2155V27.0611ZM15.5269 17.6051C15.5269 18.1647 15.0678 18.6239 14.5081 18.6239C13.9486 18.6239 13.4894 18.1647 13.4894 17.6051V13.7596C13.4894 13.2 13.9486 12.7408 14.5081 12.7408C15.0678 12.7408 15.5269 13.2 15.5269 13.7596V17.6051Z'
						fill='white'
					/>
					<path
						d='M36.0121 12.8858V9.27273H53.0352V12.8858H46.6895V30H42.3578V12.8858H36.0121ZM55.7576 30V14.4545H60.0691V30H55.7576ZM57.9235 12.4506C57.2825 12.4506 56.7326 12.2381 56.2738 11.813C55.8217 11.3812 55.5957 10.8651 55.5957 10.2646C55.5957 9.67081 55.8217 9.1614 56.2738 8.73633C56.7326 8.30451 57.2825 8.0886 57.9235 8.0886C58.5645 8.0886 59.111 8.30451 59.563 8.73633C60.0218 9.1614 60.2512 9.67081 60.2512 10.2646C60.2512 10.8651 60.0218 11.3812 59.563 11.813C59.111 12.2381 58.5645 12.4506 57.9235 12.4506ZM70.5466 30.3036C68.9542 30.3036 67.5846 29.9663 66.4375 29.2915C65.2973 28.6101 64.4201 27.6655 63.8062 26.4577C63.1989 25.25 62.8953 23.8601 62.8953 22.288C62.8953 20.6957 63.2023 19.299 63.8163 18.098C64.437 16.8903 65.3175 15.949 66.4578 15.2743C67.5981 14.5929 68.9542 14.2521 70.5263 14.2521C71.8825 14.2521 73.07 14.4984 74.0888 14.9909C75.1076 15.4835 75.9139 16.1751 76.5077 17.0657C77.1014 17.9563 77.4287 19.0021 77.4894 20.2031H73.4209C73.3062 19.4272 73.0025 18.8031 72.51 18.3308C72.0242 17.8517 71.3866 17.6122 70.5972 17.6122C69.9292 17.6122 69.3456 17.7944 68.8463 18.1587C68.3537 18.5163 67.9691 19.0392 67.6925 19.7275C67.4159 20.4157 67.2776 21.2489 67.2776 22.2273C67.2776 23.2191 67.4125 24.0625 67.6824 24.7575C67.959 25.4524 68.347 25.9821 68.8463 26.3464C69.3456 26.7108 69.9292 26.8929 70.5972 26.8929C71.0897 26.8929 71.5316 26.7917 71.923 26.5893C72.3211 26.3869 72.6483 26.0934 72.9047 25.7088C73.1678 25.3175 73.3399 24.8485 73.4209 24.302H77.4894C77.4219 25.4895 77.0981 26.5353 76.5178 27.4395C75.9443 28.3368 75.1515 29.0385 74.1394 29.5446C73.1274 30.0506 71.9297 30.3036 70.5466 30.3036ZM84.1564 25.5266L84.1665 20.3549H84.794L89.7734 14.4545H94.7225L88.0327 22.2678H87.0105L84.1564 25.5266ZM80.2498 30V9.27273H84.5613V30H80.2498ZM89.9657 30L85.3912 23.2292L88.2654 20.1829L95.016 30H89.9657ZM100.663 9.27273L105.673 25.0206H105.865L110.885 9.27273H115.743L108.598 30H102.951L95.7953 9.27273H100.663ZM135.575 9.27273V30H131.79L122.772 16.9544H122.62V30H118.238V9.27273H122.084L131.031 22.3082H131.213V9.27273H135.575Z'
						fill='white'
					/>
				</svg>
			</a>
			<nav className='navbar-class'>
				<ul>
					<li>
						<a>Music</a>
					</li>
					<li>
						<a>Sports</a>
					</li>
					<li>
						<a>Conference</a>
					</li>
					<li>
						<a>Workshop</a>
					</li>
					<li>
						<a>Theater</a>
					</li>
					<li>
						<a>My tickets</a>
					</li>
				</ul>
			</nav>
			<button id='btn-login-id'>Login</button>
		</header>
	);
};

export default memo(Navbar);
