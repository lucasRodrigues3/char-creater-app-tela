import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
} from "@mui/material";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./styles/containers.css";
import Selector from "./components/Selector";
import ActionButton from "./components/ActionButton";
import StatRow from "./components/StatRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const races = [
  {
    name: "Bestial",
    lineages: ["Basteti", "Garuda", "Kitsune", "Lizaru", "Nezumi", "Ursain"],
  },
  // { name: "Devil", lineages: ["Efreet", "Dajhal", "Phermion", "Xemosh", "Vashel"] },
  { name: "Elfo" },
  { name: "Fada" },
  { name: "Goblin" },
  {
    name: "Humano",
  },
  { name: "Tritão" },
];

const lineages = [
  [{ name: "Alphir" }, { name: "Tyreon" }, { name: "Valkans" }],
  [{ name: "Glaem" }, { name: "Obryn" }, { name: "Nicx" }],
  [{ name: "Akkiry" }, { name: "Moggart" }, { name: "Skrirc" }],
  [
    { name: "Bazuk" },
    { name: "Inorak" },
    { name: "Jhaffe" },
    { name: "Glaevor" },
    { name: "Nyppoon" },
  ],
  [{ name: "Nereyos" }, { name: "Syren" }, { name: "Abycess" }],
];

const categories = [
  { name: "Berserk" },
  { name: "Mystic" },
  { name: "Trickster" },
];

const classes = [
  { name: "Arqueiro" },
  { name: "Assassino" },
  { name: "Atirador" },
  { name: "Bardo" },
  { name: "Caçador" },
  { name: "Clérigo" },
  { name: "Cultista" },
  { name: "Druida" },
  { name: "Guerreiro" },
  { name: "Ladino" },
  { name: "Lanceiro" },
  { name: "Lutador" },
  { name: "Mago" },
  { name: "Xamã" },
];

export default function NestedGrid() {
  //States
  //Raças e Linhagens
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedLineage, setSelectedLineage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  //Atributos
  const [forca, setForca] = useState(1);
  const [destreza, setDestreza] = useState(1);
  const [vigor, setVigor] = useState(1);
  const [agilidade, setAgilidade] = useState(1);
  const [percepcao, setPercepcao] = useState(1);
  const [inteligencia, setInteligencia] = useState(1);
  const [raciocinio, setRaciocinio] = useState(1);
  const [magia, setMagia] = useState(1);

  //Status
  const [vitalidade, setVitalidade] = useState(0);
  const [mana, setMana] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [fdv, setFdv] = useState(0);

  //Pontos Atibutos iniciai
  const [primario, setPrimario] = useState(0);
  const [secundario, setSecundario] = useState(0);
  const [bonus, setBonus] = useState(0);

  //Pontos Atibutos + Level
  const [level, setLevel] = useState(1);
  const [atributoLevel, setAtributoLevel] = useState(0);
  const [conhecimento, setConhecimento] = useState(0);

  //Conhecimentos
  const [academicos, setAcademicos] = useState(0);
  const [arcano, setArcano] = useState(0);
  const [armasBrancas, setArmasBrancas] = useState(0);
  const [artilharia, setArtilharia] = useState(0);
  const [briga, setBriga] = useState(0);
  const [esportes, setEsportes] = useState(0);
  const [esquiva, setEsquiva] = useState(0);
  const [furtividade, setFurtividade] = useState(0);
  const [investigacao, setInvestigacao] = useState(0);
  const [manha, setManha] = useState(0);
  const [medicina, setMedicina] = useState(0);
  const [ocultismo, setOcultismo] = useState(0);
  const [oficios, setOficios] = useState(0);
  const [prontidao, setProntidao] = useState(0);
  const [rituais, setRituais] = useState(0);
  const [seguranca, setSeguranca] = useState(0);
  const [sobrevivencia, setSobrevivencia] = useState(0);
  const [tecnologia, setTecnologia] = useState(0);

  //Functions
  //Raças e Linhagens
  const handleRaceChange = (event) => {
    setSelectedRace(event.target.value);
    setSelectedLineage("");

    if (event.target.value === `Bestial`) {
      setVitalidade(60 + 8);
      setMana(20 + 4);
      setStamina(70 + 7);
      setFdv(16);
      setPrimario(11);
      setSecundario(7);
      setBonus(4);
      setConhecimento(18);
    }
    // else if (event.target.value === `Devil`){
    //   setVitalidade(150+10)
    //   setMana(0)
    //   setStamina(0)
    //   setFdv(25)
    //   setPrimario(15)
    //   setSecundario(15)
    //   setBonus(0)
    // }
    else if (event.target.value === `Elfo`) {
      setVitalidade(50 + 5);
      setMana(70 + 7);
      setStamina(30 + 7);
      setFdv(16);
      setPrimario(8);
      setSecundario(4);
      setBonus(4);
      setConhecimento(24);
    } else if (event.target.value === `Fada`) {
      setVitalidade(50 + 4);
      setMana(50 + 10);
      setStamina(50 + 1);
      setFdv(20);
      setPrimario(8);
      setSecundario(6);
      setBonus(4);
      setConhecimento(22);
    } else if (event.target.value === `Goblin`) {
      setVitalidade(60 + 6);
      setMana(30 + 5);
      setStamina(60 + 10);
      setFdv(14);
      setPrimario(12);
      setSecundario(8);
      setBonus(4);
      setConhecimento(16);
    } else if (event.target.value === `Humano`) {
      setVitalidade(70 + 5);
      setMana(40 + 6);
      setStamina(40 + 6);
      setFdv(18);
      setPrimario(9);
      setSecundario(9);
      setBonus(0);
      setConhecimento(22);
    } else if (event.target.value === `Tritão`) {
      setVitalidade(60 + 10);
      setMana(50 + 6);
      setStamina(40 + 7);
      setFdv(12);
      setPrimario(14);
      setSecundario(8);
      setBonus(0);
      setConhecimento(18);
    }
  };

  const handleLineageChange = (event) => {
    setSelectedLineage(event.target.value);
    if (event.target.value === `Bazuk`) {
      setVitalidade(vitalidade + 15);
      setMana(mana + 10);
      setStamina(stamina + 10);
      setForca(forca + 2);
      setMagia(magia + 2);
    } else if (event.target.value === `Inorak`) {
      setVitalidade(vitalidade + 5);
      setMana(mana + 20);
      setStamina(stamina + 10);
      setDestreza(destreza + 2);
      setRaciocinio(raciocinio + 2);
    } else if (event.target.value === `Jhaffe`) {
      setVitalidade(vitalidade + 11);
      setMana(mana + 12);
      setStamina(stamina + 12);
      setVigor(vigor + 2);
      setPercepcao(percepcao + 2);
    } else if (event.target.value === `Glaevor`) {
      setVitalidade(vitalidade + 9);
      setMana(mana + 13);
      setStamina(stamina + 13);
      setAgilidade(agilidade + 2);
      setRaciocinio(raciocinio + 2);
    } else if (event.target.value === `Nyppon`) {
      setVitalidade(vitalidade + 10);
      setMana(mana + 10);
      setStamina(stamina + 15);
      setDestreza(destreza + 2);
      setInteligencia(inteligencia + 2);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleReset = (event) => {
    setSelectedRace("");
    setSelectedCategory("");
    setSelectedClass("");

    setForca(1);
    setDestreza(1);
    setVigor(1);
    setAgilidade(1);
    setPercepcao(1);
    setInteligencia(1);
    setRaciocinio(1);
    setMagia(1);

    setVitalidade(0);
    setMana(0);
    setStamina(0);
    setFdv(0);
    setPrimario(0);
    setSecundario(0);
    setBonus(0);

    setLevel(1);
    setAtributoLevel(0);

    setAcademicos(0);
    setArcano(0);
    setArmasBrancas(0);
    setArtilharia(0);
    setBriga(0);
    setEsportes(0);
    setEsquiva(0);
    setFurtividade(0);
    setInvestigacao(0);
    setManha(0);
    setMedicina(0);
    setOcultismo(0);
    setOficios(0);
    setProntidao(0);
    setRituais(0);
    setSeguranca(0);
    setSobrevivencia(0);
    setTecnologia(0);

    setConhecimento(0);
  };

  //Atributos
  const handleForcaIncrement = () => {
    setForca(forca + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (selectedRace === `Bestial`) {
        setStamina(stamina + 7);
      } else if (selectedRace === `Elfo`) {
        setStamina(stamina + 7);
      } else if (selectedRace === `Fada`) {
        setStamina(stamina + 1);
      } else if (selectedRace === `Goblin`) {
        setStamina(stamina + 10);
      } else if (selectedRace === `Humano`) {
        setStamina(stamina + 6);
      } else if (selectedRace === `Tritão`) {
        setStamina(stamina + 7);
      }
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleForcayDecrement = () => {
  //   if (forca > 1) {
  //     setForca(forca - 1);
  //     if (selectedRace === `Bestial`){
  //       setStamina(stamina - 7)
  //     }
  //     else if (selectedRace === `Elfo`){
  //       setStamina(stamina - 7)
  //     }
  //     else if (selectedRace === `Fada`){
  //       setStamina(stamina - 1)
  //     }
  //     else if (selectedRace === `Goblin`){
  //       setStamina(stamina - 10)
  //     }
  //     else if (selectedRace === `Humano`){
  //       setStamina(stamina - 6)
  //     }
  //     else if (selectedRace === `Tritão`){
  //       setStamina(stamina - 7)
  //     }
  //   }
  // };

  const handleDestrezaIncrement = () => {
    setDestreza(destreza + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleDestrezaDecrement = () => {if (destreza > 1) {setDestreza(destreza - 1);}};

  const handleVigorIncrement = () => {
    setVigor(vigor + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (selectedRace === `Bestial`) {
        setVitalidade(vitalidade + 8);
      } else if (selectedRace === `Devil`) {
        setVitalidade(vitalidade + 10);
      } else if (selectedRace === `Elfo`) {
        setVitalidade(vitalidade + 5);
      } else if (selectedRace === `Fada`) {
        setVitalidade(vitalidade + 4);
      } else if (selectedRace === `Goblin`) {
        setVitalidade(vitalidade + 6);
      } else if (selectedRace === `Humano`) {
        setVitalidade(vitalidade + 5);
      } else if (selectedRace === `Tritão`) {
        if (selectedLineage === `Abycess`) {
          setVitalidade(vitalidade + 10 * 2);
        } else {
          setVitalidade(vitalidade + 10);
        }
      }
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleVigoryDecrement = () => {
  //   if (vigor > 1) {
  //     setVigor(vigor - 1);
  //     if (selectedRace === `Bestial`){
  //       setVitalidade(vitalidade - 8)
  //     }
  //     else if (selectedRace === `Devil`){
  //       setVitalidade(vitalidade - 10)
  //     }
  //     else if (selectedRace === `Elfo`){
  //       setVitalidade(vitalidade - 5)
  //     }
  //     else if (selectedRace === `Fada`){
  //       setVitalidade(vitalidade - 4)
  //     }
  //     else if (selectedRace === `Goblin`){
  //       setVitalidade(vitalidade - 6)
  //     }
  //     else if (selectedRace === `Humano`){
  //       setVitalidade(vitalidade - 5)
  //     }
  //     else if (selectedRace === `Tritão`){
  //       setVitalidade(vitalidade - 10)
  //     }
  //   }
  // };

  const handleAgilidadeIncrement = () => {
    setAgilidade(agilidade + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleAgilidadeDecrement = () => {if (agilidade > 1) {setAgilidade(agilidade - 1);}};
  const handlePercepcaoIncrement = () => {
    setPercepcao(percepcao + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handlePercepcaoDecrement = () => {if (percepcao > 1) {setPercepcao(percepcao - 1);}};
  const handleInteligenciaIncrement = () => {
    setInteligencia(inteligencia + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleInteligenciaDecrement = () => {if (inteligencia > 1) {setInteligencia(inteligencia - 1);}};
  const handleRaciocinioIncrement = () => {
    setRaciocinio(raciocinio + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleRaciocinioDecrement = () => {if (raciocinio > 1) {setRaciocinio(raciocinio - 1);}};

  const handleMagiaIncrement = () => {
    setMagia(magia + 1);
    if (atributoLevel > 0) {
      setAtributoLevel(atributoLevel - 1);
    }
    if (level === 1) {
      if (selectedRace === `Bestial`) {
        setMana(mana + 4);
      } else if (selectedRace === `Elfo`) {
        setMana(mana + 7);
      } else if (selectedRace === `Fada`) {
        setMana(mana + 10);
      } else if (selectedRace === `Goblin`) {
        setMana(mana + 5);
      } else if (selectedRace === `Humano`) {
        setMana(mana + 6);
      } else if (selectedRace === `Tritão`) {
        setMana(mana + 6);
      }
      if (primario !== 0) {
        setPrimario(primario - 1);
      } else if (secundario !== 0) {
        setSecundario(secundario - 1);
      } else if (bonus !== 0) {
        setBonus(bonus - 1);
      }
    }
  };
  // const handleMagiaDecrement = () => {
  //   if (magia > 1) {
  //     setMagia(magia - 1);
  //     if (selectedRace === `Bestial`){
  //       setMana(mana - 4)
  //     }
  //     else if (selectedRace === `Elfo`){
  //       setMana(mana - 7)
  //     }
  //     else if (selectedRace === `Fada`){
  //       setMana(mana - 10)
  //     }
  //     else if (selectedRace === `Goblin`){
  //       setMana(mana - 5)
  //     }
  //     else if (selectedRace === `Humano`){
  //       setMana(mana - 6)
  //     }
  //     else if (selectedRace === `Tritão`){
  //       setMana(mana - 6)
  //     }
  //   }

  // };

  const handleLevel = () => {
    setLevel(level + 1);
    setAtributoLevel(1);
    setConhecimento(conhecimento + 1);
    if (level < 4) {
      setVitalidade(vitalidade + vigor);
      setMana(mana + magia);
      setStamina(stamina + forca);
      setFdv(fdv + 2);
    }
    if (level === 4) {
      setVitalidade(vitalidade + vigor * 2);
      setMana(mana + magia * 2);
      setStamina(stamina + forca * 2);
      setFdv(fdv + 4);
    } else if (level > 4 && level < 9) {
      setVitalidade(vitalidade + vigor);
      setMana(mana + magia);
      setStamina(stamina + forca);
      setFdv(fdv + 2);
    } else if (level === 9) {
      setAtributoLevel(atributoLevel + 1);
      setVitalidade(vitalidade + vigor * 2);
      setMana(mana + magia * 2);
      setStamina(stamina + forca * 2);
      setFdv(fdv + 4);
    } else if (level > 9 && level < 14) {
      setAtributoLevel(atributoLevel + 1);
      setVitalidade(vitalidade + vigor);
      setMana(mana + magia);
      setStamina(stamina + forca);
      setFdv(fdv + 2);
    }
  };
  //conhecimentos
  const handleAcademicosIncrement = () => {
    if (conhecimento > 0) {
      setAcademicos(academicos + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleArcanoIncrement = () => {
    if (conhecimento > 0) {
      setArcano(arcano + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleArmasBrancasIncrement = () => {
    if (conhecimento > 0) {
      setArmasBrancas(armasBrancas + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleArtilhariaIncrement = () => {
    if (conhecimento > 0) {
      setArtilharia(artilharia + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleBrigaIncrement = () => {
    if (conhecimento > 0) {
      setBriga(briga + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleEsportesIncrement = () => {
    if (conhecimento > 0) {
      setEsportes(esportes + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleEsquivaIncrement = () => {
    if (conhecimento > 0) {
      setEsquiva(esquiva + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleFurtividadeIncrement = () => {
    if (conhecimento > 0) {
      setFurtividade(furtividade + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleInvestigacaoIncrement = () => {
    if (conhecimento > 0) {
      setInvestigacao(investigacao + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleManhaIncrement = () => {
    if (conhecimento > 0) {
      setManha(manha + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleMedicinaIncrement = () => {
    if (conhecimento > 0) {
      setMedicina(medicina + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleOcultismoIncrement = () => {
    if (conhecimento > 0) {
      setOcultismo(ocultismo + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleOficiosIncrement = () => {
    if (conhecimento > 0) {
      setOficios(oficios + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleProntidaoIncrement = () => {
    if (conhecimento > 0) {
      setProntidao(prontidao + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleRituaisIncrement = () => {
    if (conhecimento > 0) {
      setRituais(rituais + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleSegurancaIncrement = () => {
    if (conhecimento > 0) {
      setSeguranca(seguranca + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleSobrevivenciaIncrement = () => {
    if (conhecimento > 0) {
      setSobrevivencia(sobrevivencia + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  const handleTecnologiaIncrement = () => {
    if (conhecimento > 0) {
      setTecnologia(tecnologia + 1);
      setConhecimento(conhecimento - 1);
    }
  };
  // decrescer
  const handleAcademicosDecrement = () => {
    if (academicos > 0) {
      setAcademicos(academicos - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleArcanoDecrement = () => {
    if (arcano > 0) {
      setArcano(arcano - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleArmasBrancasDecrement = () => {
    if (armasBrancas > 0) {
      setArmasBrancas(armasBrancas - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleArtilhariaDecrement = () => {
    if (artilharia > 0) {
      setArtilharia(artilharia - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleBrigaDecrement = () => {
    if (briga > 0) {
      setBriga(briga - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleEsportesDecrement = () => {
    if (esportes > 0) {
      setEsportes(esportes - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleEsquivaDecrement = () => {
    if (esquiva > 0) {
      setEsquiva(esquiva - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleFurtividadeDecrement = () => {
    if (furtividade > 0) {
      setFurtividade(furtividade - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleInvestigacaoDecrement = () => {
    if (investigacao > 0) {
      setInvestigacao(investigacao - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleManhaDecrement = () => {
    if (manha > 0) {
      setManha(manha - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleMedicinaDecrement = () => {
    if (medicina > 0) {
      setMedicina(medicina - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleOcultismoDecrement = () => {
    if (ocultismo > 0) {
      setOcultismo(ocultismo - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleOficiosDecrement = () => {
    if (oficios > 0) {
      setOficios(oficios - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleProntidaoDecrement = () => {
    if (prontidao > 0) {
      setProntidao(prontidao - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleRituaisDecrement = () => {
    if (rituais > 0) {
      setRituais(rituais - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleSegurancaDecrement = () => {
    if (seguranca > 0) {
      setSeguranca(seguranca - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleSobrevivenciaDecrement = () => {
    if (sobrevivencia > 0) {
      setSobrevivencia(sobrevivencia - 1);
      setConhecimento(conhecimento + 1);
    }
  };
  const handleTecnologiaDecrement = () => {
    if (tecnologia > 0) {
      setTecnologia(tecnologia - 1);
      setConhecimento(conhecimento + 1);
    }
  };

  const arrayOfSelectors = [
    {
      label: "Raça",
      selected: selectedRace,
      array: races,
      handleChange: handleRaceChange,
    },
    {
      label: "Linhagem",
      selected: selectedLineage,
      array: lineages,
      handleChange: handleLineageChange,
    },
    {
      label: "Categorias",
      selected: selectedCategory,
      array: categories,
      handleChange: handleCategoryChange,
    },
    {
      label: "Classes",
      selected: selectedClass,
      array: classes,
      handleChange: handleClassChange,
    },
  ];

  const buttonsArray = [
    {
      label: "Reset",
      handleFunction: handleReset,
      style: { width: "70px", height: "38px" },
    },
    {
      label: "Level Up",
      handleFunction: handleLevel,
      style: { width: "120px", height: "38px" },
    },
  ];

  const statsFisicos = [
    {
      label: "Força",
      state: forca,
    },
    {
      label: "Destreza",
      state: destreza,
    },
    {
      label: "Vigor",
      state: vigor,
    },
    {
      label: "Agilidade",
      state: agilidade,
    },
  ];

  const statsMentais = [
    {
      label: "Percepção",
      state: percepcao,
    },
    {
      label: "Inteligência",
      state: inteligencia,
    },
    {
      label: "Raciocínio",
      state: raciocinio,
    },
    {
      label: "Magia",
      state: magia,
    },
  ];

  return (
    <>
      <Grid container spacing={1} class="wrapper">
        <Grid item xs={12}>
          <div
            class="header"
            style={{
              width: "100%",
              display: "flex",
              marginBottom: "3em",
            }}
          >
            {/* Abstraímos todos os componentes repetidos de formulário para dentro de um
          componente próprio chamado 'Selector' */}
            {/* Como ainda assim se trata de uma repetição, ao invés de poluir o código com
          vários componentes basicamente iguais (seriam 4 <Selector/>), podemos usar o
          'map' do Javascript */}
            {/* Para usar o map do Javascript é preciso um Array [], por isso criei o 'arrayOfSelectors',
          que contém as informações específicas de cada formulário que eu preciso. Esse approach mantém
          organizado, escalável e fácil de alterar, caso necessário, depois */}
            {arrayOfSelectors.map((object) => (
              <Selector
                label={object.label}
                selected={object.selected}
                handleChange={object.handleChange}
                array={object.array}
                selectedRace={selectedRace}
              />
            ))}

            {/* Mesma coisa para os ícones de 'Level Up' e 'Reset' */}
            {/* REGRA DE OURO: Se o código repetiu mais de 1 vez, provavelmente é um componente */}

            {buttonsArray.map((button) => (
              <ActionButton
                label={button.label}
                handleFunction={button.handleFunction}
                style={button.style}
              />
            ))}
          </div>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            {/*
            A descrição do stats, o nível dela e o botão de incremento não precisam ser repetidos.
            Cada linha que está no canto esquerdo da tela é, em si, um componente que recebe
            1. Um nome de um stat, 2. O estado daquele stat nesse momento, 3. Um botão de incremento do stat.
            Pronto. Com a estrutura do componente definida, fica fácil de perceber que é abstraível para um componente externo
            */}
            <div
              class="left_wrapper"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/*
              Esses próximos dois 'map' excluem centenas linhas de código da versão anterior.
              E eles só estão separados pq tem alguma separação entre um e o outro, senão seria só 1 map
              */}
              {statsFisicos.map((stat) => (
                <StatRow label={stat.label} state={stat.state} />
              ))}
              _____________
              {statsMentais.map((stat) => (
                <StatRow label={stat.label} state={stat.state} />
              ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <Item>Right</Item>
          </Grid>
        </Grid>
      </Grid>

      {/* <Box sx={{ alignItems: "center", marginTop: "50px", width: "50%" }}>
          <Grid container spacing={1}>
            <Grid>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "80px" }}>
                  Vitalidade
                </Item>
              </Grid>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "80px" }}>
                  {vitalidade}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                Mana
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {mana}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                Stamina
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {stamina}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                FDV
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {fdv}
                </Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  Primários
                </Item>
              </Grid>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {primario}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                Secundário
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {secundario}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                Bônus
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "70px" }}>
                  {bonus}
                </Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid>
              <Grid>
                <Item sx={{ padding: "18px" }} style={{ width: "60px" }}>
                  Level
                </Item>
              </Grid>
              <Grid>
                <Item sx={{ padding: "18px" }}>{level}</Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "140px" }}>
                Atributo Disponível
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }}>{atributoLevel}</Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item sx={{ padding: "18px" }} style={{ width: "170px" }}>
                Conhecimento Disponível
              </Item>
              <Grid>
                <Item sx={{ padding: "18px" }}>{conhecimento}</Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Conhecimentos
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Acadêmicos
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Arcano
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Armas Brancas
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Artilharia
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Briga
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Esportes
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Esquiva
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Furtividade
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Investigação
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Manha
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Medicina
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Ocultismo
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Ofícios
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Prontidão
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Rituais
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Segurança
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Sobrevivência
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "100px", height: "18px" }}
                >
                  Tecnologia
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item
                sx={{ padding: "18px" }}
                style={{ width: "50px", height: "15px" }}
              >
                Pontos
              </Item>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {academicos}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {arcano}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {armasBrancas}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {artilharia}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {briga}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {esportes}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {esquiva}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {furtividade}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {investigacao}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {manha}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {medicina}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {ocultismo}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {oficios}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {prontidao}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {rituais}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {seguranca}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {sobrevivencia}
                </Item>
              </Grid>
              <Grid>
                <Item
                  sx={{ padding: "18px" }}
                  style={{ width: "40px", height: "18px" }}
                >
                  {tecnologia}
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item
                sx={{ padding: "18px" }}
                style={{ width: "40px", height: "15px" }}
              >
                ....
              </Item>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleAcademicosDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArcanoDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArmasBrancasDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArtilhariaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleBrigaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleEsportesDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleEsquivaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleFurtividadeDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleInvestigacaoDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleManhaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleMedicinaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleOcultismoDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleOficiosDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleProntidaoDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleRituaisDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleSegurancaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleSobrevivenciaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleTecnologiaDecrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Item>
              </Grid>
            </Grid>

            <Grid>
              <Grid></Grid>
              <Item
                sx={{ padding: "18px" }}
                style={{ width: "40px", height: "15px" }}
              >
                ....
              </Item>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleAcademicosIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArcanoIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArmasBrancasIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleArtilhariaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleBrigaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleEsportesIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleEsquivaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleFurtividadeIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleInvestigacaoIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleManhaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleMedicinaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleOcultismoIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleOficiosIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleProntidaoIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleRituaisIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleSegurancaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleSobrevivenciaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
              <Grid>
                <Item>
                  <IconButton
                    onClick={handleTecnologiaIncrement}
                    style={{ width: "40px", height: "38px" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box> */}
    </>
  );
}
