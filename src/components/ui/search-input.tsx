"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";



type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  //tela onde esta 

  const [searchInput, setSearchInput] = useState(defaultValue ?? '');

  const handleSearchEnter = () => {
    if (searchInput) {
      //encodeURIComponent, vai formatar o texto para ficar compativel com a url
      router.push('/search?q=' + encodeURIComponent(searchInput));
    }

  }

  if (hideOnSearch && pathname === '/search') return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      onChange={t => setSearchInput(t)}
      onEnter={handleSearchEnter}
      filled

    />
  );
}