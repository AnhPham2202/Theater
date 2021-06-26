import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Calender from '../../Components/Calender/Calender'
import Carousel from '../../Components/Carousel/Carousel'
import FilmList from '../../Components/FilmList/FilmList'
import News from '../../Components/News/News'
import ShadowLine from '../../Components/ShadowLine/ShadowLine'
import Apps from '../../Components/Apps/Apps'

export default function Home(propsRoute) {
    useEffect(() => {
        alert('Web hiện tại chỉ available cho PC và Laptop, em sẽ cập nhật responsive sớm nhất có thể !!!')
        alert(`Để có thể thử hết tất cả các chức năng, các anh chị có thể đăng nhập account admin sau: \n 
        - user: anhPhamAdmin \n
        - pass: admin \n
        - Nếu tài khoản đã bị ai đó đổi password xin hãy liên lạc với em hoặc đăng ký và đăng nhập tài khoản thông thường và truy cập thông qua url: theater-anhpham.surge.sh/admin để vào tab quản trị do em không validate để anh chị đều có thể vô được, tuy nhiên các chức năng thêm xóa sửa user/phim sẽ không thực hiện được thông qua tài khoản thường \m
        - Anh chị cũng có thể dùng tài khoản thường vào url admin như trên sau đó chọn thêm người dùng và tạo 1 tài khoản có loại người dùng là "Quản trị viên" để tạo 1 tài khoản quản trị \n
        Sau đó trải nghiệm như bình thường. Để thử các tính năng admin bấm vào tên đăng nhập ở thanh navbar và vào tab "Quản trị viên" `)
      }, [])
    return (
        <div>
            <Carousel/>
            <FilmList {...propsRoute}/>
            <ShadowLine/>
            <Calender />
            <ShadowLine/>
            <News/>
            <Apps />
        </div>
    )
}
