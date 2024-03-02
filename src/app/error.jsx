/*
 * @Description: 请补充模块描述
 * 
 * @Author: liaoxiangsui
 * @Date: 2024-03-02 13:17:10
 * 
 * Copyright © 2014-2024 Rabbitpre.com. All Rights Reserved.
 */
'use client'

import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // 尝试恢复
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}