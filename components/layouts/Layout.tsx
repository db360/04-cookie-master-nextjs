import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'


export const Layout = ({children}:React.PropsWithChildren<{}>) => {
  return (
      <>
        <Head>

        </Head>
        <nav>
            <Navbar />
        </nav>
        <main style={{padding: '20px 50px'}}>
            {children}
        </main>


      </>
  )
}
