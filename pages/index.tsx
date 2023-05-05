
import { NextPageWithLayout } from "@/models";
import { MainLayout } from "components/layout";
import Typography from '@mui/material/Typography';
import { useWallet } from "@meshsdk/react";
import { Seo } from "@/components/common/seo";


const Home: NextPageWithLayout = () => {
  const {connected} = useWallet();

  return (
    <>
    <Seo
        data={{
          title: 'Blockchain | Update',
          description:
            'DCOneCrypto cardano-connect-wallet-tools Private',
          url: 'https://learn-nextjs-fawn.vercel.app/',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />
        <Typography variant="h5" gutterBottom>
      {
        !connected?'Kết nối với ví để sử dụng':'Có thể gửi nhiều ada, mint, burn, tương tác với sc'
      }
    </Typography>
    </>
  

  );
}
Home.Layout = MainLayout
export default Home