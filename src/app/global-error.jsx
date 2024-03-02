/*
 * @Description: 处理根布局和根模板中的错误
 * 
 * @Author: liaoxiangsui
 * @Date: 2024-03-02 13:18:58
 * 
 * Copyright © 2014-2024 Rabbitpre.com. All Rights Reserved.
 */
'use client'
// app/global-error.js
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}