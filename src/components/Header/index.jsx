/*
 * @Description: 请补充模块描述
 * 
 * @Author: liaoxiangsui
 * @Date: 2024-03-02 14:54:39
 * 
 * Copyright © 2014-2024 Rabbitpre.com. All Rights Reserved.
 */
import Link from "next/link"
import style from "./index.module.css"

export function Header () {
  return (
    <div className={style.head}>
      <ul>
        <li>
          <Link href="/">
            首页
          </Link>
        </li>
        <li>
          <Link href="/gpt">
            gpt
          </Link>
        </li>
        <li>
          <Link href="/pic">
            文生图
          </Link>
        </li>
        <li>
          <Link href="/video">
            文生视频
          </Link>
        </li>
      </ul>
    </div>
  )
}