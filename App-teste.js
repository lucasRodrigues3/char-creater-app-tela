<div>
<FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
  <InputLabel>Raça</InputLabel>
  <Select value={selectedRace} onChange={handleRaceChange} label="Raça">
    {races.map((race) => (
      <MenuItem key={race.name} value={race.name}>
        {race.name}
      </MenuItem>
    ))}
  </Select>
</FormControl>

{selectedRace && (
  <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel>Linhagem</InputLabel>
    <Select
      value={selectedLineage}
      onChange={handleLineageChange}
      label="Linhagem"
    >
      {races
        .find((race) => race.name === selectedRace)
        .lineages.map((lineage) => (
          <MenuItem key={lineage} value={lineage}>
            {lineage}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
)}

<FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
  <InputLabel>Categoria</InputLabel>
  <Select
    value={selectedCategory}
    onChange={handleCategoryChange}
    label="Categoria"
  >
    {categories.map((category) => (
      <MenuItem key={category} value={category}>
        {category}
      </MenuItem>
    ))}
  </Select>
</FormControl>

<FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
  <InputLabel>Classe</InputLabel>
  <Select
    value={selectedClass}
    onChange={handleClassChange}
    label="Classe"
  >
    {classes.map((classItem) => (
      <MenuItem key={classItem} value={classItem}>
        {classItem}
      </MenuItem>
    ))}
  </Select>
</FormControl>
</div>