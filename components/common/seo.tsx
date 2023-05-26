import Head from 'next/head'
import * as React from 'react'

export interface SeoData {
	title: string
	description: string
	url?: string
	thumbnailUrl: string
}

export interface SeoProps {
	data: SeoData
}

export function Seo({ data }: SeoProps) {
	const { title, description, url, thumbnailUrl } = data

	return (
		<Head>
			<title>
				{title}
			</title>
			<link rel="shortcut icon" href="https://dconecrypto.finance/favicon.ico" />
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<meta content="Cardano ecosystem interface map showing all projects and dapps on the Cardano blockchain (ADA)," name="description" />
			<meta content="Cardano, cardano ecosystem, cardano wallet, ada, ada cardano, cardano coin, cardano price, Haskell, Metaverse, cardano vasil hard fork, cardano tvl, muesliswap, nami wallet, cardano scan, hydra cardano" name="keywords" />
			<meta content="Cardano, cardano ecosystem, cardano wallet, ada, ada cardano, cardano coin, cardano price, Haskell, Metaverse, cardano vasil hard fork, cardano tvl, muesliswap, nami wallet, cardano scan, hydra cardano" name="author" />
			<meta name="generator" content="DCOne Crypto" />
			<meta property="og:site_name" content="DCOne Crypto" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Interactive community ecosystem map and reviews on Cardano - DCOneCrypto.finance" />
			<meta property="og:description" content="Cardano ecosystem interface map showing all projects and dapps on the Cardano blockchain (ADA)," />
			<meta property="og:image" content="https://uploads-ssl.webflow.com/635b615fa5453d42d64fd2aa/642686aea44b75e981c6a9fe_DCOneCrypto-Logo-New.png" />
			<meta property="og:url" content="hhttps://cardano.dconecrypto.finance/" />
			<meta property="twitter:domain" content="cardano.dconecrypto.finance" />
			<meta name="twitter:site" content="@DCOneCrypto" />
			<meta name="twitter:creator" content="@DCOneCrypto" />
			<meta name="twitter:title" content="Interactive community ecosystem map and reviews on Cardano - DCOneCrypto.finance" />
			<meta name="twitter:description" content="Cardano ecosystem interface map showing all projects and dapps on the Cardano blockchain (ADA)," />
			<meta name="twitter:image" content="https://uploads-ssl.webflow.com/635b615fa5453d42d64fd2aa/642686aea44b75e981c6a9fe_DCOneCrypto-Logo-New.png" />
			<meta property="twitter:url" content="https://cardano.dconecrypto.finance" />
		</Head>
	)
}
