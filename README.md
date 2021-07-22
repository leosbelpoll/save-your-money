# save-your-money

This app will help you to save your money searching cheaper products

## user

id: number
identificador: string
platform: string
email: string
name: string
lastName: string
avatar: string

## product

id: number
title: string
price: number
previewImg: string
images: string[]

## search

id: number
user_id: number
product_id: number
date: date

## notification

id: number
text: string
title: string
user_id: number
status: Enum(PENDING | READ)
date: date
