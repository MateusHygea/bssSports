import React, { useState } from "react";
import { StatusBar, FlatList } from "react-native";

import Header from "../../components/Header";
import { ListItem } from "../../components/CategoryList/ListItem";

import * as S from "./styles";

import BlogImage from "../../assets/blogimage.png";

export function Home() {
  const [data, setData] = useState([
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
    {
      id: "Java basquete é campeão daTaça Curitiba.",
      description: "BSS Esportes há 3 horas",
      date: "BSS Esportes há 3 horas",
    },
  ]);

  return (
    <S.Container>
      <Header />
      <S.BlogContainer>
        <S.LastNotices>Últimas notícias</S.LastNotices>
        <S.blogImage source={BlogImage} />
        <S.blogTitle>
          Time de Curitiba vence partida com ampla vantagem mesmo com Herbert em
          quadra{" "}
        </S.blogTitle>
        <S.blogDescription>
          Terça-feira (14) é dia de Champions League! Dois jogos agitam, logo
          mais, as oitavas de final da principal competição europeia. Manchester
          City (1) x (1) RB Leipzig FC Porto (0) x (1) Inter Acompanhe...
        </S.blogDescription>
      </S.BlogContainer>
      <S.areaView>
        <FlatList
          data={data}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </S.areaView>
    </S.Container>
  );
}
