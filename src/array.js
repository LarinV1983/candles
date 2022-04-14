[
{
  "title": "Свеча ароматическая IQTRAVELS 'Цветочный букет - Соевая свеча'",
  "price": 400,
  "imageUrl":"img/candles/1.webp"
},
{
	"title": "Свеча ароматическая AROMANTIQUE 'Шоколадное суфле'",
  "price": 210, 
  "imageUrl":"img/candles/2.webp"
},
{
	"title": "Свеча ароматическая Aroma Doma 'Роскошный цветок'", 
  "price": 422, 
  "imageUrl":"img/candles/3.webp"
},
{
	"title": "Свеча ароматическая AROMANTIQUE 'Ежевичный щербет'",
  "price": 215, 
  "imageUrl":"img/candles/4.webp"
}
];





import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    <rect x="203" y="40" rx="0" ry="0" width="0" height="23" /> 
    <rect x="191" y="112" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="137" /> 
    <rect x="0" y="153" rx="10" ry="10" width="150" height="15" /> 
    <rect x="0" y="178" rx="10" ry="10" width="100" height="15" /> 
    <rect x="118" y="215" rx="10" ry="10" width="32" height="32" /> 
    <rect x="0" y="222" rx="10" ry="10" width="84" height="22" />
  </ContentLoader>
)

export default MyLoader