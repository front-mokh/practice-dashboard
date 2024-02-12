import SideNav from '@/components/SideNav/SideNav'
import React from 'react'


export const metadata = {
    title: "Dashboard"
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <SideNav></SideNav>
            <div>
                {children}
            </div>
        </div>
    )
}
