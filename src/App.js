import { useEffect, useState } from "react";
import AvailableWallets from "./Components/Modals/AvailableWallets/AvailableWallets";
import "./App.css ";
import Charts from "./Components/Charts/Charts";
import Button from "./Components/Button/Button";
import dygnify_logo from "./Images/dygnify_logo.png";
import Loader from "./Components/Loader/Loader";
import { isConnected } from "./services/connect-wallet";
const user =
	"https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021061/user-logo_w8yfph.jpg";

function App() {
	const [isLoader, setIsLoader] = useState(false);
	const [loaderDisplayed, setLoaderDisplayed] = useState(false);
	const [availableWalletModalOpen, setAvailableWalletModalOpen] =
		useState(false);
	const [availableWallets, setAvailableWallets] = useState([
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo1_q4lugd.png",
			name: "MetaMask",
			id: "0",
			selected: false,
			primary: true,
			score: 905,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676298745/ProfilePic_1_c1ghhg.svg",
			name: "CoinDcx",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676298651/kucoin-cryptocurrency-stock-market-logo-isolated-white-background-crypto-stock-exchange-symbol-design-element-banners_337410-1692_uurpka.jpg",
			name: "KuCoin",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021059/logo2_o2yqhd.png",
			name: "WalletConnect",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo6_xhcxav.png",
			name: "Coinbase",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 650,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo4_wxtljw.jpg",
			name: "Magic Wallet",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 805,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo5_kxostt.png",
			name: "Portis",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 907,
		},
		{
			logo: "https://res.cloudinary.com/dltzp2gwx/image/upload/v1676021060/logo7_a5agqf.png",
			name: "Torus",
			id: "0xc5e5be3602995a7f0bd737e0931d776a0bcc336f",
			selected: false,
			primary: false,
			score: 700,
		},
	]);
	const [connectedWallet, setConnectedWallet] = useState({
		logo: user,
		name: "",
		id: "",
	});

	if (isLoader) {
		setTimeout(() => {
			setIsLoader(false);
			setLoaderDisplayed(true);
		}, 7000);
	}

	const [selected, setSelected] = useState(false);
	useEffect(() => {
		for (let wallet of availableWallets) {
			if (wallet.selected === true) {
				setConnectedWallet({ ...wallet });
				setSelected(true);
				break;
			}
		}
	}, [availableWallets]);

	return (
		<div>
			{isLoader && <Loader />}

			<div className="reputation-header">
				<img src={dygnify_logo} alt="" />
				<Button onClick={() => setAvailableWalletModalOpen(true)}>
					{selected ? "Connected" : "Connect Wallet"}
				</Button>
			</div>
			<div
				className={`${
					availableWalletModalOpen || isLoader
						? "blockpass-package-my-blur"
						: ""
				} reputation-body`}
			>
				<section style={{ width: "70%" }}>
					<section className="repu-card blockpass-package-macro-wallet-status">
						{!selected && (
							<div className="status-info">
								<img
									src={user}
									alt=""
									className="blockpass-package-default-logo"
								/>
								<p>
									<span>Wallet not connected</span>
									<span
										onClick={() => setAvailableWalletModalOpen(true)}
										style={{ cursor: "pointer" }}
										className="blockpass-package-wallet-connect"
									>
										Connect wallet
									</span>
								</p>
							</div>
						)}
						{availableWallets
							.filter((wallet) => wallet.selected === true)
							.map((wallet, i) => (
								<div key={i} className="status-info">
									<img
										src={wallet.logo}
										alt=""
										className="blockpass-package-default-logo"
									/>
									<p>
										<span>{wallet.name}</span>
										<span className="blockpass-package-wallet-connect">
											{wallet.id}
										</span>
									</p>
								</div>
							))}
					</section>
					<br />
					<section className="blockpass-package-flex-center button-group">
						<Button onClick={() => setAvailableWalletModalOpen(true)}>
							{selected ? "+ Add more wallet" : "Connect Wallet"}
						</Button>
						<Button onClick={() => setIsLoader(true)} disabled={!selected}>
							Get Credit Score
						</Button>
					</section>

					<section className="repu-card blockpass-package-macro-wallet-card-container">
						<h3 className="text-center blockpass-package-gray-header">
							Reputation Score
						</h3>
						<div className="blockpass-package-macro-wallet-card">
							<div className="blockpass-package-graph-card blockpass-package-flex-center">
								<p>On Chain</p>
								<Charts
									connectedWallet={connectedWallet}
									loaderDisplayed={loaderDisplayed}
								/>
							</div>
							<div className="blockpass-package-graph-card blockpass-package-flex-center">
								<p>Off Chain</p>
								<Charts
									connectedWallet={connectedWallet}
									loaderDisplayed={loaderDisplayed}
								/>
							</div>
						</div>
						<br />
						<div className="blockpass-package-flex-center">
							<Button disabled={!loaderDisplayed}>Create NFC</Button>
						</div>
					</section>
				</section>
				<section style={{ width: "30%" }}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
						voluptas quo accusantium temporibus nam sunt porro alias iste nobis
						commodi placeat aperiam nulla nihil officiis dolor voluptatem quod
						necessitatibus voluptates!
					</p>
				</section>
			</div>
			{availableWalletModalOpen && (
				<AvailableWallets
					setAvailableWalletModalOpen={setAvailableWalletModalOpen}
					availableWallets={availableWallets}
					setAvailableWallets={setAvailableWallets}
				/>
			)}
		</div>
	);
}

export default App;
