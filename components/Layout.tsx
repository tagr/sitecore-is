import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer.tsx';
import Navigation from '@/components/Navigation.tsx';
import Meta from '@/components/meta';

type LayoutProps = {
    title?: string, 
    className?: string, 
    metaDescription?: string,
    children?: ReactNode
};

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.metaDescription} />
                <Meta />
            </Head>  
            <Navigation />
            <div className={props.className} role="main">
                {props.children}        
            </div>
            <Footer />   
        </>
    )
}

export default Layout;