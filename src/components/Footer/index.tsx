import React from "react";

import { TabArea, TabItem, ImageIcon } from "./styles";

import basketball from '../../assets/basketball.png'
import iconhand from '../../assets/iconhand.png'
import voleibol from '../../assets/voleibol.png'


export function CusttomTabs() {

  return (
    <TabArea>
      <TabItem onPress={() => {}}>
        <ImageIcon source={basketball}/>
      </TabItem>
      <TabItem onPress={() => {}}>
        <ImageIcon source={iconhand}/>
      </TabItem>
      <TabItem onPress={() => {}}>
        <ImageIcon source={voleibol}/>
      </TabItem>
    </TabArea>
  );
}
