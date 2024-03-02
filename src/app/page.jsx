/*
 * @Description: 请补充模块描述
 * 
 * @Author: liaoxiangsui
 * @Date: 2024-03-02 12:44:59
 * 
 * Copyright © 2014-2024 Rabbitpre.com. All Rights Reserved.
 */
import { use } from 'react'
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    message: 'Hello, Next.js!',
  }
}
export default function Page(props) {
  const { message } = use(getData())
  return <h1>{message}</h1>
}