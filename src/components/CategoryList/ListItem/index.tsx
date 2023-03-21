import React from "react"

import * as S from './styles';

import BlogImage from '../../../assets/blogimage.png'
import miniLogo from '../../../assets/minilogo.png'

interface DataProps {
    data: [{}] | any;
}

export function ListItem({ data }: DataProps) {

    return (
  
      <S.blogInfosWrapper>
        {/* <S.Separetor></S.Separetor> */}
        <S.blogFooter>
          <S.blogTitle>{data.id}</S.blogTitle>
          <S.blogFooterInfos>
            <S.blogImageLogo source={miniLogo} />
            <S.blogFooterDate>{data.date}</S.blogFooterDate>
          </S.blogFooterInfos>
        </S.blogFooter>
        <S.imageBlogGroup source={BlogImage} />
      </S.blogInfosWrapper>
  
    )
  }
  