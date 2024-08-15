import React from 'react'

export default function page({params}:{params: {slug: string}}) {
  return (
    <div>aqui está seu texto: {params.slug}</div>
  )
}
