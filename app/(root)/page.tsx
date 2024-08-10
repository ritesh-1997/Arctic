import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {
                      firstName:"Ritesh", 
                      lastName:"Gupta",
                      email:"riteshgupta.221297@gmail.com"
                    };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type={"greeting"}
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext={"Access and manage your account and trasactions."}
            />
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12302.20}
            />
        </header>
        Recent Transaction
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance:421.67}]}
      />
    </section>
  )
}

export default Home
