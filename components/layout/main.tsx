//tsrpfc
import { LayoutProps } from "@/models";
import { Layout, theme, MenuProps, Menu } from 'antd';
import { HeaderLayout } from "./Header";
import { NavigationLayout } from "./Navigation";
const { Content, Footer } = Layout;
import { listMenu } from "@/models";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TwitterOutlined } from "@ant-design/icons";
import Icon, { HomeOutlined } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Link from "next/link";
const TelegramSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" fill="#419FD9" rx="24"></rect><rect width="48" height="48" fill="url(#paint0_linear)" rx="24"></rect><path fill="#fff" d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"></path><defs><linearGradient id="paint0_linear" x1="24" x2="24" y2="47.644" gradientUnits="userSpaceOnUse"><stop stopColor="#2AABEE"></stop><stop offset="1" stopColor="#229ED9"></stop></linearGradient></defs></svg>
);
const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TelegramSvg} {...props} />
);

export function MainLayout({ children }: LayoutProps) {
  const { token: { colorBgContainer } } = theme.useToken();
  const router = useRouter();
  const [selectMenu, setSelectMenu] = useState<string>('1')

  useEffect(() => {
    const pathname = router.pathname
    console.log(pathname)
    const index: number = listMenu.findIndex(x => x.link === pathname)
    if (index != -1) {
      console.log(index)
      setSelectMenu((index + 1).toString())
    }else if(pathname == "/mint"){
      setSelectMenu("1")
    }
  }, [router])


  return (
    <Layout >
      <NavigationLayout />
      <Layout>
        <HeaderLayout />
        <Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, minHeight: "80vh", background: colorBgContainer }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2023 Created by Team DCOne Crypto &nbsp;
          {/* <TwitterOutlined TwitterOutlined/> */}
          <Link href="https://twitter.com/DCOneCrypto"><TwitterOutlined/></Link> &nbsp;
          <Link href="https://t.me/dconecryptovn"><HeartIcon /></Link>
          </Footer>
      </Layout>
    </Layout>
  );
}
