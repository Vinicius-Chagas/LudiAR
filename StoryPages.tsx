import React, { useState } from "react";
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroNode,
  Viro3DObject,
  ViroSphere,
  ViroBox,
  ViroText,
  ViroMaterials,
} from "@reactvision/react-viro";

// Import 3D models
import sun from "./assets/hot_sun.glb";
import clouds from "./assets/clouds.glb";
import heart from "./assets/heart.glb";
import star from "./assets/star.glb";
import whiteSphere from "./assets/white-sphere.glb";

// Create materials for different colors
ViroMaterials.createMaterials({
  white: {
    diffuseColor: "#FFFFFF",
  },
  whiteBg: {
    diffuseColor: "#FFFFFF",
    lightingModel: "Constant",
  },
  black: {
    diffuseColor: "#000000",
  },
  red: {
    diffuseColor: "#FF0000",
  },
  yellow: {
    diffuseColor: "#FFFF00",
  },
  blue: {
    diffuseColor: "#87CEEB", // Sky blue
  },
  pink: {
    diffuseColor: "#FFB6C1",
  },
  orange: {
    diffuseColor: "#FFA500",
  },
});

// Create tracking targets for each page
ViroARTrackingTargets.createTargets({
  page1: {
    source: require("./assets/qr-codes/page1.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page2: {
    source: require("./assets/qr-codes/page2.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page3: {
    source: require("./assets/qr-codes/page3.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page4: {
    source: require("./assets/qr-codes/page4.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page5: {
    source: require("./assets/qr-codes/page5.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page6: {
    source: require("./assets/qr-codes/page6.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page7: {
    source: require("./assets/qr-codes/page7.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page8: {
    source: require("./assets/qr-codes/page8.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page9: {
    source: require("./assets/qr-codes/page9.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page10: {
    source: require("./assets/qr-codes/page10.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page11: {
    source: require("./assets/qr-codes/page11.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
  page12: {
    source: require("./assets/qr-codes/page12.png"),
    orientation: "Up",
    physicalWidth: 0.1,
    type: "Image",
  },
});

const StoryARScene = () => {
  // State to track which page is currently active (only ONE at a time)
  const [activePage, setActivePage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Função para ativar página com delay
  const activatePageWithDelay = (pageNumber: number) => {
    if (isLoading) return; // Evita múltiplas ativações durante o cooldown
    
    // Mostra o conteúdo IMEDIATAMENTE
    setActivePage(pageNumber);
    setIsLoading(true);
    
    // Cooldown de 6 segundos para evitar leituras múltiplas
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  };
  
  // Função para desativar página
  const deactivatePage = () => {
    setActivePage(null);
    setIsLoading(false);
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" intensity={1000} />
      

      {/* PÁGINA 1: Círculo Branco com fundo preto */}
      <ViroARImageMarker
        target="page1"
        onAnchorFound={() => activatePageWithDelay(1)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 1}
          transformBehaviors={["billboardY"]}
        >
          {/* Fundo preto GIGANTE cobrindo TUDO */}
          <ViroBox
            height={20}
            width={20}
            length={0.01}
            position={[0, 0, -2]}
            materials={["black"]}
          />
          {/* Texto em branco GRANDE sem fundo */}
          <ViroText
            text="Era uma vez,&#10;um mundo novo"
            scale={[1, 1, 1]}
            position={[0, 0.7, 0]}
            width={2}
            height={1}
            textAlign="center"
            textLineBreakMode="WordWrap"
            color="#FFFFFF"
            fontFamily="cursive"
            style={{ fontSize: 40 }}
          />
          {/* Esfera Branca */}
          <ViroSphere
            radius={0.15}
            position={[0, 0.3, 0]}
            materials={["white"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 2: Linhas com fundo preto */}
      <ViroARImageMarker
        target="page2"
        onAnchorFound={() => activatePageWithDelay(2)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 2}
          transformBehaviors={["billboardY"]}
        >
          {/* Fundo preto GIGANTE cobrindo TUDO */}
          <ViroBox
            height={20}
            width={20}
            length={0.01}
            position={[0, 0, -2]}
            materials={["black"]}
          />
          {/* Texto em branco GRANDE sem fundo */}
          <ViroText
            text="Com cheiros,&#10;sons e sensações"
            scale={[1, 1, 1]}
            position={[0, 0.7, 0]}
            width={2}
            height={1}
            textAlign="center"
            textLineBreakMode="WordWrap"
            color="#FFFFFF"
            fontFamily="cursive"
            style={{ fontSize: 40 }}
          />
          {/* Linha tracejada com curvas - BRANCA */}
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.25, 0.35, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.18, 0.37, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.11, 0.36, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.04, 0.34, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.03, 0.35, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.10, 0.37, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.17, 0.36, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.24, 0.35, 0]} materials={["white"]} />
          
          {/* Segunda linha */}
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.22, 0.25, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.15, 0.23, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.08, 0.24, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[-0.01, 0.26, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.06, 0.25, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.13, 0.23, 0]} materials={["white"]} />
          <ViroBox height={0.015} width={0.05} length={0.015} position={[0.20, 0.24, 0]} materials={["white"]} />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 3: Silhueta de homem e mulher com fundo preto */}
      <ViroARImageMarker
        target="page3"
        onAnchorFound={() => activatePageWithDelay(3)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 3}
          transformBehaviors={["billboardY"]}
        >
          {/* Fundo preto GIGANTE cobrindo TUDO */}
          <ViroBox
            height={20}
            width={20}
            length={0.01}
            position={[0, 0, -2]}
            materials={["black"]}
          />
          {/* Texto em branco GRANDE sem fundo */}
          <ViroText
            text="Conheci tudo&#10;quanto é povo"
            scale={[1, 1, 1]}
            position={[0, 0.8, 0]}
            width={2}
            height={1}
            textAlign="center"
            textLineBreakMode="WordWrap"
            color="#FFFFFF"
            fontFamily="cursive"
            style={{ fontSize: 40 }}
          />
          {/* HOMEM (esquerda) - Silhueta BRANCA */}
          <ViroSphere
            radius={0.08}
            position={[-0.2, 0.45, 0]}
            materials={["white"]}
          />
          <ViroBox
            height={0.25}
            width={0.15}
            length={0.08}
            position={[-0.2, 0.25, 0]}
            materials={["white"]}
          />
          {/* MULHER (direita) - Silhueta BRANCA */}
          <ViroSphere
            radius={0.08}
            position={[0.2, 0.45, 0]}
            materials={["white"]}
          />
          <ViroBox
            height={0.25}
            width={0.15}
            length={0.08}
            position={[0.2, 0.25, 0]}
            materials={["white"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 4: Coração Vermelho */}
      <ViroARImageMarker
        target="page4"
        onAnchorFound={() => activatePageWithDelay(4)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 4}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página - CAIXA MENOR E TEXTO MAIOR */}
          <ViroNode position={[0, 0.6, 0]}>
            <ViroBox
              height={0.15}
              width={0.35}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="E descobri&#10;as emoções"
              scale={[1, 1, 1]}
              position={[0, 0, 0.01]}
              width={1.5}
              height={0.8}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
              fontFamily="cursive"
              style={{ fontSize: 30 }}
            />
          </ViroNode>
          {/* Coração 3D - MENOR */}
          <Viro3DObject
            source={heart}
            position={[0, 0.3, 0]}
            scale={[0.03, 0.03, 0.03]}
            type="GLB"
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 5: Formas Geométricas Pretas */}
      <ViroARImageMarker
        target="page5"
        onAnchorFound={() => activatePageWithDelay(5)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 5}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página - CAIXA MENOR E TEXTO MAIOR */}
          <ViroNode position={[0, 0.7, 0]}>
            <ViroBox
              height={0.3}
              width={0.4}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="de início é&#10;tudo&#10;embaçado&#10;branco e&#10;preto é&#10;certo"
              scale={[1, 1, 1]}
              position={[0, 0, 0.01]}
              width={1.5}
              height={1.2}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
              fontFamily="cursive"
              style={{ fontSize: 24 }}
            />
          </ViroNode>
          {/* Círculo */}
          <ViroSphere
            radius={0.08}
            position={[-0.2, 0.3, 0]}
            materials={["black"]}
          />
          {/* Quadrado */}
          <ViroBox
            height={0.15}
            width={0.15}
            length={0.02}
            position={[0, 0.3, 0]}
            materials={["black"]}
          />
          {/* Triângulo (pirâmide) */}
          <ViroBox
            height={0.15}
            width={0.15}
            length={0.02}
            position={[0.2, 0.3, 0]}
            rotation={[0, 0, 45]}
            materials={["black"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 6: Emoji de olhinhos */}
      <ViroARImageMarker
        target="page6"
        onAnchorFound={() => activatePageWithDelay(6)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 6}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.6, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="Chega até ser&#10;engraçado ver tudo&#10;bem de perto"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={3}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Rosto */}
          <ViroSphere
            radius={0.15}
            position={[0, 0.3, 0]}
            materials={["yellow"]}
          />
          {/* Olho esquerdo */}
          <ViroSphere
            radius={0.03}
            position={[-0.05, 0.35, 0.12]}
            materials={["black"]}
          />
          {/* Olho direito */}
          <ViroSphere
            radius={0.03}
            position={[0.05, 0.35, 0.12]}
            materials={["black"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 7: Rosto chorando + Rosto feliz */}
      <ViroARImageMarker
        target="page7"
        onAnchorFound={() => activatePageWithDelay(7)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 7}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.6, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="Do choro à&#10;gargalhada é um&#10;salto bem curtinho"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={3}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Rosto Triste */}
          <ViroSphere
            radius={0.1}
            position={[-0.15, 0.3, 0]}
            materials={["yellow"]}
          />
          {/* Rosto Feliz */}
          <ViroSphere
            radius={0.1}
            position={[0.15, 0.3, 0]}
            materials={["yellow"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 8: Silhueta mãe com filho */}
      <ViroARImageMarker
        target="page8"
        onAnchorFound={() => activatePageWithDelay(8)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 8}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.7, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="Saudade não me&#10;falta do meu doce&#10;colinho"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={3}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Mãe - cabeça */}
          <ViroSphere
            radius={0.06}
            position={[0, 0.45, 0]}
            materials={["black"]}
          />
          {/* Mãe - corpo */}
          <ViroBox
            height={0.2}
            width={0.12}
            length={0.08}
            position={[0, 0.3, 0]}
            materials={["black"]}
          />
          {/* Bebê - cabeça */}
          <ViroSphere
            radius={0.04}
            position={[0.08, 0.32, 0.08]}
            materials={["pink"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 9: Céu azul e nuvens (começa a ter cores) */}
      <ViroARImageMarker
        target="page9"
        onAnchorFound={() => activatePageWithDelay(9)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 9}
          transformBehaviors={["billboardY"]}
        >
          {/* Fundo azul GIGANTE cobrindo TUDO (céu) */}
          <ViroBox
            height={20}
            width={20}
            length={0.01}
            position={[0, 0, -2]}
            materials={["blue"]}
          />
          {/* Texto em branco GRANDE sem fundo */}
          <ViroText
            text="Um pouquinho mais&#10;para frente o céu&#10;se mostra belo"
            scale={[1, 1, 1]}
            position={[0, 0.8, 0]}
            width={2.5}
            height={1.5}
            textAlign="center"
            textLineBreakMode="WordWrap"
            color="#FFFFFF"
            fontFamily="cursive"
            style={{ fontSize: 35 }}
          />
          {/* 3 Nuvens espalhadas */}
          <Viro3DObject
            source={clouds}
            position={[-0.25, 0.55, 0]}
            rotation={[0, 90, 0]}
            scale={[0.015, 0.015, 0.015]}
            type="GLB"
          />
          <Viro3DObject
            source={clouds}
            position={[0.25, 0.45, 0]}
            rotation={[0, 90, 0]}
            scale={[0.015, 0.015, 0.015]}
            type="GLB"
          />
          <Viro3DObject
            source={clouds}
            position={[0, 0.25, 0]}
            rotation={[0, 90, 0]}
            scale={[0.02, 0.02, 0.02]}
            type="GLB"
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 10: Sol amarelo e flores vermelhas */}
      <ViroARImageMarker
        target="page10"
        onAnchorFound={() => activatePageWithDelay(10)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 10}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.7, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="Começo a reconhecer&#10;gente, o vermelho&#10;e o amarelo"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={3}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Sol */}
          <Viro3DObject
            source={sun}
            position={[0, 0.4, 0]}
            scale={[0.05, 0.05, 0.05]}
            type="GLB"
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 11: Nuvens, sol, estrela, borboleta, flores, coração */}
      <ViroARImageMarker
        target="page11"
        onAnchorFound={() => activatePageWithDelay(11)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 11}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.8, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="todo dia é&#10;diferente&#10;um montão&#10;de&#10;descobertas"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={4}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Sol */}
          <Viro3DObject
            source={sun}
            position={[0, 0.6, 0]}
            scale={[0.04, 0.04, 0.04]}
            type="GLB"
          />
          {/* Nuvens */}
          <Viro3DObject
            source={clouds}
            position={[-0.2, 0.5, 0]}
            scale={[0.015, 0.015, 0.015]}
            type="GLB"
          />
          {/* Estrela */}
          <Viro3DObject
            source={star}
            position={[0.2, 0.55, 0]}
            scale={[0.05, 0.05, 0.05]}
            type="GLB"
            materials={["yellow"]}
          />
          {/* Flores */}
          <ViroSphere
            radius={0.04}
            position={[-0.15, 0.2, 0]}
            materials={["red"]}
          />
          <ViroSphere
            radius={0.04}
            position={[0.15, 0.2, 0]}
            materials={["red"]}
          />
          {/* Coração */}
          <ViroSphere
            radius={0.05}
            position={[0, 0.3, 0]}
            materials={["pink"]}
          />
        </ViroNode>
      </ViroARImageMarker>

      {/* PÁGINA 12: Porta amarela */}
      <ViroARImageMarker
        target="page12"
        onAnchorFound={() => activatePageWithDelay(12)}
        onAnchorRemoved={deactivatePage}
      >
        <ViroNode 
          visible={activePage === 12}
          transformBehaviors={["billboardY"]}
        >
          {/* Texto da página */}
          <ViroNode position={[0, 0.7, 0]}>
            <ViroBox
              height={0.25}
              width={0.6}
              length={0.01}
              position={[0, 0, 0]}
              materials={["whiteBg"]}
            />
            <ViroText
              text="Para entender a&#10;minha mente, deixe&#10;as portas abertas"
              scale={[0.08, 0.08, 0.08]}
              position={[0, 0, 0.01]}
              width={6}
              height={3}
              textAlign="center"
              textLineBreakMode="WordWrap"
              color="#000000"
            />
          </ViroNode>
          {/* Porta (retângulo amarelo) */}
          <ViroBox
            height={0.4}
            width={0.25}
            length={0.02}
            position={[0, 0.3, 0]}
            materials={["yellow"]}
          />
          {/* Maçaneta */}
          <ViroSphere
            radius={0.02}
            position={[0.1, 0.3, 0.02]}
            materials={["black"]}
          />
        </ViroNode>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default StoryARScene;
