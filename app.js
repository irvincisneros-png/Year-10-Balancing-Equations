const missions = [
  {
    title: "Hydrogen Launch",
    tag: "Starter",
    type: "Synthesis",
    context: "Fuel cells turn hydrogen and oxygen into water. Balance the atoms so the reaction obeys conservation of mass.",
    reactants: ["H2", "O2"],
    products: ["H2O"],
    answer: [2, 1, 2],
    hint: "Oxygen is odd on the product side. Put 2 before H2O, then fix hydrogen.",
    difficulty: "Easy",
  },
  {
    title: "Iron Works",
    tag: "Starter",
    type: "Combination",
    context: "Iron reacts with oxygen to form rust-like iron oxide. Track Fe first, then oxygen.",
    reactants: ["Fe", "O2"],
    products: ["Fe2O3"],
    answer: [4, 3, 2],
    hint: "Fe2O3 has 3 oxygen atoms. Use 2 Fe2O3 to make 6 oxygen atoms, then match O2 and Fe.",
    difficulty: "Easy",
  },
  {
    title: "Rocket Burn",
    tag: "Combustion",
    type: "Combustion",
    context: "Methane burns in oxygen to make carbon dioxide and water. Combustion equations often balance C, then H, then O.",
    reactants: ["CH4", "O2"],
    products: ["CO2", "H2O"],
    answer: [1, 2, 1, 2],
    hint: "Carbon is already balanced. Four hydrogens need 2 water molecules. Now count oxygen on the product side.",
    difficulty: "Medium",
  },
  {
    title: "Aluminium Shield",
    tag: "Synthesis",
    type: "Oxidation",
    context: "Aluminium forms a protective oxide layer. The smallest whole-number coefficients matter here.",
    reactants: ["Al", "O2"],
    products: ["Al2O3"],
    answer: [4, 3, 2],
    hint: "Make oxygen even by placing 2 before Al2O3. That creates 6 oxygen atoms and 4 aluminium atoms.",
    difficulty: "Medium",
  },
  {
    title: "Salt Swap",
    tag: "Ions",
    type: "Double displacement",
    context: "Barium chloride and sodium sulfate swap partners. The sulfate ion stays together, so you can balance SO4 as one group mentally.",
    reactants: ["BaCl2", "Na2SO4"],
    products: ["BaSO4", "NaCl"],
    answer: [1, 1, 1, 2],
    hint: "Ba and SO4 are already balanced. Chlorine has 2 atoms on the reactant side, so NaCl needs a coefficient.",
    difficulty: "Medium",
  },
  {
    title: "Limestone Heat",
    tag: "Decomposition",
    type: "Thermal decomposition",
    context: "Calcium carbonate breaks down when heated. Sometimes an equation is already balanced with invisible 1s.",
    reactants: ["CaCO3"],
    products: ["CaO", "CO2"],
    answer: [1, 1, 1],
    hint: "Count Ca, C, and O before changing anything. A coefficient of 1 is still a coefficient.",
    difficulty: "Easy",
  },
  {
    title: "Propane Challenge",
    tag: "Boss",
    type: "Combustion",
    context: "Propane is used in camping stoves. Balance carbon, then hydrogen, then oxygen to clear the boss mission.",
    reactants: ["C3H8", "O2"],
    products: ["CO2", "H2O"],
    answer: [1, 5, 3, 4],
    hint: "Three carbons need 3 CO2. Eight hydrogens need 4 H2O. Then total the oxygen atoms on the product side.",
    difficulty: "Hard",
  },
  {
    title: "Alum Finale",
    tag: "Boss",
    type: "Double displacement",
    context: "Aluminium sulfate reacts with calcium hydroxide. Parentheses mean the group count is multiplied.",
    reactants: ["Al2(SO4)3", "Ca(OH)2"],
    products: ["Al(OH)3", "CaSO4"],
    answer: [1, 3, 2, 3],
    hint: "Treat SO4 and OH as groups first. Three sulfate groups need 3 CaSO4, then use 3 Ca(OH)2 to supply 6 OH groups.",
    difficulty: "Hard",
  },
  {
    title: "Nitrogen Spark",
    tag: "Starter",
    type: "Synthesis",
    context: "Nitrogen and hydrogen combine to form ammonia. This is a classic equation for practising odd and even atom counts.",
    reactants: ["N2", "H2"],
    products: ["NH3"],
    answer: [1, 3, 2],
    hint: "Two nitrogen atoms need 2 NH3. That gives 6 hydrogen atoms, so H2 needs a coefficient of 3.",
    difficulty: "Easy",
  },
  {
    title: "Silver Split",
    tag: "Decomposition",
    type: "Decomposition",
    context: "Silver oxide decomposes into silver and oxygen. Balance the oxygen first, then adjust silver.",
    reactants: ["Ag2O"],
    products: ["Ag", "O2"],
    answer: [2, 4, 1],
    hint: "O2 has 2 oxygen atoms, so use 2 Ag2O. That creates 4 silver atoms.",
    difficulty: "Easy",
  },
  {
    title: "Zinc Rescue",
    tag: "Single swap",
    type: "Single displacement",
    context: "Zinc can displace hydrogen from hydrochloric acid. Watch the paired chlorine atoms in zinc chloride.",
    reactants: ["Zn", "HCl"],
    products: ["ZnCl2", "H2"],
    answer: [1, 2, 1, 1],
    hint: "ZnCl2 has 2 chlorine atoms, so put 2 before HCl. The hydrogen then forms H2.",
    difficulty: "Medium",
  },
  {
    title: "Magnesium Flash",
    tag: "Combustion",
    type: "Oxidation",
    context: "Magnesium burns with a bright white flame to make magnesium oxide.",
    reactants: ["Mg", "O2"],
    products: ["MgO"],
    answer: [2, 1, 2],
    hint: "O2 has 2 oxygen atoms. Put 2 before MgO, then balance Mg.",
    difficulty: "Easy",
  },
  {
    title: "Ethane Burn",
    tag: "Combustion",
    type: "Combustion",
    context: "Ethane combustion is a step up from methane. Use carbon, hydrogen, then oxygen.",
    reactants: ["C2H6", "O2"],
    products: ["CO2", "H2O"],
    answer: [2, 7, 4, 6],
    hint: "Avoid fractions by starting with 2 C2H6. That gives 4 CO2 and 6 H2O.",
    difficulty: "Hard",
  },
  {
    title: "Copper Nitrate",
    tag: "Ions",
    type: "Double displacement",
    context: "Copper nitrate and sodium hydroxide form a precipitate. The nitrate group stays together.",
    reactants: ["Cu(NO3)2", "NaOH"],
    products: ["Cu(OH)2", "NaNO3"],
    answer: [1, 2, 1, 2],
    hint: "There are 2 nitrate groups on the reactant side, so NaNO3 needs a coefficient of 2. Then balance Na and OH.",
    difficulty: "Hard",
  },
  {
    title: "Potassium Chlorate",
    tag: "Decomposition",
    type: "Decomposition",
    context: "Potassium chlorate breaks down to potassium chloride and oxygen. This one rewards careful oxygen counting.",
    reactants: ["KClO3"],
    products: ["KCl", "O2"],
    answer: [2, 2, 3],
    hint: "Use 2 KClO3 to make 6 oxygen atoms. That becomes 3 O2, and KCl follows.",
    difficulty: "Medium",
  },
  {
    title: "Phosphorus Fire",
    tag: "Synthesis",
    type: "Oxidation",
    context: "Phosphorus reacts with oxygen to make phosphorus pentoxide. Balance oxygen with a multiple of 10.",
    reactants: ["P4", "O2"],
    products: ["P2O5"],
    answer: [1, 5, 2],
    hint: "Two P2O5 molecules contain 4 phosphorus atoms and 10 oxygen atoms.",
    difficulty: "Medium",
  },
  {
    title: "Salt Spark",
    tag: "Starter",
    type: "Synthesis",
    context: "Sodium reacts with chlorine to form table salt. Diatomic chlorine means Cl comes in pairs.",
    reactants: ["Na", "Cl2"],
    products: ["NaCl"],
    answer: [2, 1, 2],
    hint: "Cl2 has 2 chlorine atoms, so put 2 before NaCl. Then match sodium.",
    difficulty: "Easy",
  },
  {
    title: "Water Split",
    tag: "Decomposition",
    type: "Decomposition",
    context: "Electricity can split water into hydrogen and oxygen gas. Both gases are diatomic.",
    reactants: ["H2O"],
    products: ["H2", "O2"],
    answer: [2, 2, 1],
    hint: "Make oxygen even by using 2 H2O. That gives 4 hydrogen atoms.",
    difficulty: "Easy",
  },
  {
    title: "Mercury Oxide",
    tag: "Decomposition",
    type: "Decomposition",
    context: "Mercury oxide decomposes into mercury and oxygen. Oxygen gas is written as O2.",
    reactants: ["HgO"],
    products: ["Hg", "O2"],
    answer: [2, 2, 1],
    hint: "Use 2 HgO to make enough oxygen for O2, then balance mercury.",
    difficulty: "Easy",
  },
  {
    title: "Calcium Splash",
    tag: "Single swap",
    type: "Single displacement",
    context: "Calcium reacts with water to form calcium hydroxide and hydrogen gas.",
    reactants: ["Ca", "H2O"],
    products: ["Ca(OH)2", "H2"],
    answer: [1, 2, 1, 1],
    hint: "Ca(OH)2 contains two OH groups, so start by placing 2 before H2O.",
    difficulty: "Medium",
  },
  {
    title: "Sodium Splash",
    tag: "Single swap",
    type: "Single displacement",
    context: "Sodium reacts vigorously with water. Balance sodium and hydrogen carefully.",
    reactants: ["Na", "H2O"],
    products: ["NaOH", "H2"],
    answer: [2, 2, 2, 1],
    hint: "Use 2 NaOH to make hydrogen even, then match Na and H2O.",
    difficulty: "Medium",
  },
  {
    title: "Halogen Swap",
    tag: "Single swap",
    type: "Single displacement",
    context: "Chlorine can displace bromine from potassium bromide. Remember Br2 forms pairs.",
    reactants: ["Cl2", "KBr"],
    products: ["KCl", "Br2"],
    answer: [1, 2, 2, 1],
    hint: "Br2 needs 2 bromine atoms, so put 2 before KBr and KCl.",
    difficulty: "Medium",
  },
  {
    title: "Lead Iodide",
    tag: "Ions",
    type: "Double displacement",
    context: "Lead nitrate and potassium iodide form bright yellow lead iodide.",
    reactants: ["Pb(NO3)2", "KI"],
    products: ["PbI2", "KNO3"],
    answer: [1, 2, 1, 2],
    hint: "PbI2 needs 2 iodide ions. Then the two nitrate groups need 2 KNO3.",
    difficulty: "Hard",
  },
  {
    title: "Carbonate Fizz",
    tag: "Acids",
    type: "Acid-carbonate",
    context: "Sodium carbonate reacts with hydrochloric acid to produce salt, water, and carbon dioxide.",
    reactants: ["Na2CO3", "HCl"],
    products: ["NaCl", "H2O", "CO2"],
    answer: [1, 2, 2, 1, 1],
    hint: "Two sodium atoms need 2 NaCl. That also sets up 2 chlorine atoms from 2 HCl.",
    difficulty: "Medium",
  },
  {
    title: "Limestone Fizz",
    tag: "Acids",
    type: "Acid-carbonate",
    context: "Calcium carbonate reacts with hydrochloric acid. This is the classic carbonate fizz test.",
    reactants: ["CaCO3", "HCl"],
    products: ["CaCl2", "H2O", "CO2"],
    answer: [1, 2, 1, 1, 1],
    hint: "CaCl2 needs 2 chlorine atoms, so put 2 before HCl.",
    difficulty: "Medium",
  },
  {
    title: "Magnesium Acid",
    tag: "Acids",
    type: "Single displacement",
    context: "Magnesium reacts with hydrochloric acid to make magnesium chloride and hydrogen gas.",
    reactants: ["Mg", "HCl"],
    products: ["MgCl2", "H2"],
    answer: [1, 2, 1, 1],
    hint: "MgCl2 contains 2 chlorine atoms, so HCl needs a coefficient of 2.",
    difficulty: "Easy",
  },
  {
    title: "Aluminium Acid",
    tag: "Acids",
    type: "Single displacement",
    context: "Aluminium reacts with hydrochloric acid. The hydrogen gas makes this one feel like a puzzle.",
    reactants: ["Al", "HCl"],
    products: ["AlCl3", "H2"],
    answer: [2, 6, 2, 3],
    hint: "Use 2 AlCl3 to make 6 chlorine atoms. Then HCl and H2 fall into place.",
    difficulty: "Hard",
  },
  {
    title: "Iron Acid",
    tag: "Acids",
    type: "Single displacement",
    context: "Iron reacts with hydrochloric acid to make iron chloride and hydrogen gas.",
    reactants: ["Fe", "HCl"],
    products: ["FeCl2", "H2"],
    answer: [1, 2, 1, 1],
    hint: "FeCl2 needs 2 chlorine atoms, so use 2 HCl.",
    difficulty: "Easy",
  },
  {
    title: "Ethene Flame",
    tag: "Combustion",
    type: "Combustion",
    context: "Ethene burns in oxygen to make carbon dioxide and water. Balance C, then H, then O.",
    reactants: ["C2H4", "O2"],
    products: ["CO2", "H2O"],
    answer: [1, 3, 2, 2],
    hint: "Two carbons need 2 CO2. Four hydrogens need 2 H2O. Then count oxygen.",
    difficulty: "Medium",
  },
  {
    title: "Butane Burner",
    tag: "Combustion",
    type: "Combustion",
    context: "Butane is used in portable lighters and stoves. Avoid fractions by doubling the fuel.",
    reactants: ["C4H10", "O2"],
    products: ["CO2", "H2O"],
    answer: [2, 13, 8, 10],
    hint: "Start with 2 C4H10, then make 8 CO2 and 10 H2O.",
    difficulty: "Hard",
  },
  {
    title: "Ethanol Burn",
    tag: "Combustion",
    type: "Combustion",
    context: "Ethanol burns cleanly when there is enough oxygen. Remember the fuel already contains oxygen.",
    reactants: ["C2H6O", "O2"],
    products: ["CO2", "H2O"],
    answer: [1, 3, 2, 3],
    hint: "Two carbons need 2 CO2. Six hydrogens need 3 H2O. Then count total oxygen on the products.",
    difficulty: "Medium",
  },
  {
    title: "Glucose Energy",
    tag: "Combustion",
    type: "Respiration",
    context: "Cellular respiration uses glucose and oxygen to release carbon dioxide and water.",
    reactants: ["C6H12O6", "O2"],
    products: ["CO2", "H2O"],
    answer: [1, 6, 6, 6],
    hint: "Six carbons need 6 CO2. Twelve hydrogens need 6 H2O. Then balance oxygen.",
    difficulty: "Hard",
  },
  {
    title: "Copper Oxygen",
    tag: "Synthesis",
    type: "Oxidation",
    context: "Copper reacts with oxygen to form copper oxide. Oxygen gas is the main balancing clue.",
    reactants: ["Cu", "O2"],
    products: ["CuO"],
    answer: [2, 1, 2],
    hint: "O2 has 2 oxygen atoms, so make 2 CuO and then balance copper.",
    difficulty: "Easy",
  },
  {
    title: "Copper Chloride",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Copper and chlorine form copper chloride. Chlorine is diatomic.",
    reactants: ["Cu", "Cl2"],
    products: ["CuCl2"],
    answer: [1, 1, 1],
    hint: "CuCl2 already has 2 chlorine atoms, matching Cl2.",
    difficulty: "Easy",
  },
  {
    title: "Sodium Oxide",
    tag: "Synthesis",
    type: "Oxidation",
    context: "Sodium reacts with oxygen to form sodium oxide. Balance oxygen first.",
    reactants: ["Na", "O2"],
    products: ["Na2O"],
    answer: [4, 1, 2],
    hint: "Use 2 Na2O to use both atoms from O2. Then sodium becomes 4.",
    difficulty: "Medium",
  },
  {
    title: "Calcium Nitride",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Calcium and nitrogen form calcium nitride. Nitrogen gas appears as N2.",
    reactants: ["Ca", "N2"],
    products: ["Ca3N2"],
    answer: [3, 1, 1],
    hint: "N2 already matches the two nitrogen atoms in Ca3N2. Then balance calcium.",
    difficulty: "Medium",
  },
  {
    title: "Potassium Oxide",
    tag: "Synthesis",
    type: "Oxidation",
    context: "Potassium reacts with oxygen to form potassium oxide. The formula K2O makes oxygen odd on the product side.",
    reactants: ["K", "O2"],
    products: ["K2O"],
    answer: [4, 1, 2],
    hint: "Use 2 K2O to balance O2, then count potassium.",
    difficulty: "Medium",
  },
  {
    title: "Sulfur Trioxide",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Sulfur dioxide reacts with oxygen to form sulfur trioxide. This reaction appears in sulfuric acid production.",
    reactants: ["SO2", "O2"],
    products: ["SO3"],
    answer: [2, 1, 2],
    hint: "Use 2 SO3 to make sulfur even. Then oxygen becomes 6 on each side.",
    difficulty: "Medium",
  },
  {
    title: "Nitric Oxide",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Nitrogen and oxygen can form nitric oxide at high temperatures.",
    reactants: ["N2", "O2"],
    products: ["NO"],
    answer: [1, 1, 2],
    hint: "N2 and O2 both have two atoms, so 2 NO matches both elements.",
    difficulty: "Easy",
  },
  {
    title: "Hydrogen Peroxide",
    tag: "Decomposition",
    type: "Decomposition",
    context: "Hydrogen peroxide breaks down into water and oxygen gas.",
    reactants: ["H2O2"],
    products: ["H2O", "O2"],
    answer: [2, 2, 1],
    hint: "Use 2 H2O2. That gives 4 oxygen atoms and 4 hydrogen atoms.",
    difficulty: "Medium",
  },
  {
    title: "Baking Soda Heat",
    tag: "Decomposition",
    type: "Thermal decomposition",
    context: "Sodium hydrogen carbonate decomposes when heated, helping baked goods rise.",
    reactants: ["NaHCO3"],
    products: ["Na2CO3", "CO2", "H2O"],
    answer: [2, 1, 1, 1],
    hint: "Na2CO3 needs two sodium atoms, so start with 2 NaHCO3.",
    difficulty: "Hard",
  },
  {
    title: "Copper Carbonate",
    tag: "Decomposition",
    type: "Thermal decomposition",
    context: "Copper carbonate decomposes into copper oxide and carbon dioxide.",
    reactants: ["CuCO3"],
    products: ["CuO", "CO2"],
    answer: [1, 1, 1],
    hint: "Count Cu, C, and O before changing anything. It is already balanced.",
    difficulty: "Easy",
  },
  {
    title: "Lithium Water",
    tag: "Single swap",
    type: "Single displacement",
    context: "Lithium reacts with water to make lithium hydroxide and hydrogen gas.",
    reactants: ["Li", "H2O"],
    products: ["LiOH", "H2"],
    answer: [2, 2, 2, 1],
    hint: "Use 2 LiOH to make hydrogen even, then match Li and H2O.",
    difficulty: "Medium",
  },
  {
    title: "Iron Copper Swap",
    tag: "Single swap",
    type: "Single displacement",
    context: "Iron can displace copper from copper sulfate solution.",
    reactants: ["Fe", "CuSO4"],
    products: ["FeSO4", "Cu"],
    answer: [1, 1, 1, 1],
    hint: "The sulfate group stays together, and every element already matches.",
    difficulty: "Easy",
  },
  {
    title: "Aluminium Copper Swap",
    tag: "Single swap",
    type: "Single displacement",
    context: "Aluminium displaces copper from copper chloride. Balance chloride with a common multiple of 2 and 3.",
    reactants: ["Al", "CuCl2"],
    products: ["AlCl3", "Cu"],
    answer: [2, 3, 2, 3],
    hint: "Use 2 AlCl3 for 6 chlorine atoms, then 3 CuCl2 supplies those 6 chlorines.",
    difficulty: "Hard",
  },
  {
    title: "Potassium Zinc Swap",
    tag: "Single swap",
    type: "Single displacement",
    context: "Potassium can displace zinc from zinc chloride in a model single displacement equation.",
    reactants: ["K", "ZnCl2"],
    products: ["KCl", "Zn"],
    answer: [2, 1, 2, 1],
    hint: "ZnCl2 has 2 chlorine atoms, so make 2 KCl and then balance potassium.",
    difficulty: "Medium",
  },
  {
    title: "Silver Chloride",
    tag: "Ions",
    type: "Double displacement",
    context: "Silver nitrate and sodium chloride form a white silver chloride precipitate.",
    reactants: ["AgNO3", "NaCl"],
    products: ["AgCl", "NaNO3"],
    answer: [1, 1, 1, 1],
    hint: "Every atom and the nitrate group already match with coefficients of 1.",
    difficulty: "Easy",
  },
  {
    title: "Barium Nitrate",
    tag: "Ions",
    type: "Double displacement",
    context: "Barium nitrate reacts with potassium sulfate to form barium sulfate.",
    reactants: ["Ba(NO3)2", "K2SO4"],
    products: ["BaSO4", "KNO3"],
    answer: [1, 1, 1, 2],
    hint: "There are 2 nitrate groups and 2 potassium atoms, so KNO3 needs a coefficient of 2.",
    difficulty: "Hard",
  },
  {
    title: "Calcium Phosphate",
    tag: "Ions",
    type: "Double displacement",
    context: "Calcium chloride and sodium phosphate form calcium phosphate. Parentheses matter here.",
    reactants: ["CaCl2", "Na3PO4"],
    products: ["Ca3(PO4)2", "NaCl"],
    answer: [3, 2, 1, 6],
    hint: "Ca3(PO4)2 needs 3 calcium atoms and 2 phosphate groups. Then NaCl becomes 6.",
    difficulty: "Hard",
  },
  {
    title: "Magnesium Phosphate",
    tag: "Ions",
    type: "Double displacement",
    context: "Magnesium nitrate reacts with sodium phosphate. Track nitrate and phosphate groups.",
    reactants: ["Mg(NO3)2", "Na3PO4"],
    products: ["Mg3(PO4)2", "NaNO3"],
    answer: [3, 2, 1, 6],
    hint: "The product needs 3 Mg and 2 PO4 groups. That creates 6 nitrate groups for NaNO3.",
    difficulty: "Hard",
  },
  {
    title: "Neutralisation",
    tag: "Acids",
    type: "Neutralisation",
    context: "Sulfuric acid neutralises sodium hydroxide to form sodium sulfate and water.",
    reactants: ["H2SO4", "NaOH"],
    products: ["Na2SO4", "H2O"],
    answer: [1, 2, 1, 2],
    hint: "Na2SO4 needs 2 sodium atoms, so use 2 NaOH. Then water becomes 2.",
    difficulty: "Medium",
  },
  {
    title: "Nitric Neutralisation",
    tag: "Acids",
    type: "Neutralisation",
    context: "Nitric acid and calcium hydroxide neutralise to make calcium nitrate and water.",
    reactants: ["HNO3", "Ca(OH)2"],
    products: ["Ca(NO3)2", "H2O"],
    answer: [2, 1, 1, 2],
    hint: "Calcium nitrate has 2 nitrate groups, so use 2 HNO3. Then water becomes 2.",
    difficulty: "Hard",
  },
  {
    title: "Phosphoric Neutralisation",
    tag: "Acids",
    type: "Neutralisation",
    context: "Phosphoric acid neutralises potassium hydroxide to make potassium phosphate and water.",
    reactants: ["H3PO4", "KOH"],
    products: ["K3PO4", "H2O"],
    answer: [1, 3, 1, 3],
    hint: "K3PO4 needs 3 potassium atoms, so use 3 KOH. That also creates 3 waters.",
    difficulty: "Hard",
  },
  {
    title: "Methanol Burn",
    tag: "Combustion",
    type: "Combustion",
    context: "Methanol burns to produce carbon dioxide and water. The fuel already has oxygen.",
    reactants: ["CH4O", "O2"],
    products: ["CO2", "H2O"],
    answer: [2, 3, 2, 4],
    hint: "Use 2 CH4O to avoid oxygen fractions. Then balance C and H before O2.",
    difficulty: "Hard",
  },
  {
    title: "Acetylene Torch",
    tag: "Combustion",
    type: "Combustion",
    context: "Acetylene burns in welding torches. Doubling the fuel avoids a fractional oxygen coefficient.",
    reactants: ["C2H2", "O2"],
    products: ["CO2", "H2O"],
    answer: [2, 5, 4, 2],
    hint: "Start with 2 C2H2. That gives 4 CO2 and 2 H2O.",
    difficulty: "Hard",
  },
  {
    title: "Iron Oxide Reduction",
    tag: "Redox",
    type: "Reduction",
    context: "Carbon monoxide can reduce iron oxide to iron in a blast furnace model.",
    reactants: ["Fe2O3", "CO"],
    products: ["Fe", "CO2"],
    answer: [1, 3, 2, 3],
    hint: "Fe2O3 gives 2 iron atoms. Three CO molecules carry away the three oxygen atoms.",
    difficulty: "Hard",
  },
  {
    title: "Copper Oxide Reduction",
    tag: "Redox",
    type: "Reduction",
    context: "Hydrogen can reduce copper oxide to copper and water.",
    reactants: ["CuO", "H2"],
    products: ["Cu", "H2O"],
    answer: [1, 1, 1, 1],
    hint: "Each side already has 1 Cu, 1 O, and 2 H.",
    difficulty: "Easy",
  },
  {
    title: "Carbon Disulfide Burn",
    tag: "Combustion",
    type: "Combustion",
    context: "Carbon disulfide burns to form carbon dioxide and sulfur dioxide.",
    reactants: ["CS2", "O2"],
    products: ["CO2", "SO2"],
    answer: [1, 3, 1, 2],
    hint: "One carbon needs 1 CO2. Two sulfur atoms need 2 SO2. Then count oxygen.",
    difficulty: "Medium",
  },
  {
    title: "Silicon Chloride",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Silicon reacts with chlorine to form silicon tetrachloride.",
    reactants: ["Si", "Cl2"],
    products: ["SiCl4"],
    answer: [1, 2, 1],
    hint: "SiCl4 has 4 chlorine atoms, so use 2 Cl2.",
    difficulty: "Medium",
  },
  {
    title: "Aluminium Bromide",
    tag: "Synthesis",
    type: "Synthesis",
    context: "Aluminium reacts with bromine to form aluminium bromide. Bromine is diatomic.",
    reactants: ["Al", "Br2"],
    products: ["AlBr3"],
    answer: [2, 3, 2],
    hint: "Use 2 AlBr3 to make 6 bromine atoms, then 3 Br2 supplies those atoms.",
    difficulty: "Hard",
  },
];

const state = {
  order: [],
  position: 0,
  xp: Number(localStorage.getItem("balanceQuestXp") || 0),
  streak: Number(localStorage.getItem("balanceQuestStreak") || 0),
  completed: new Set(),
  mastered: new Set(JSON.parse(localStorage.getItem("balanceQuestCompleted") || "[]")),
  attempts: 0,
  solvedCurrent: false,
};

const els = {
  xp: document.querySelector("#xpValue"),
  streak: document.querySelector("#streakValue"),
  level: document.querySelector("#levelValue"),
  missionTag: document.querySelector("#missionTag"),
  missionTitle: document.querySelector("#missionTitle"),
  missionContext: document.querySelector("#missionContext"),
  reactionType: document.querySelector("#reactionType"),
  reactants: document.querySelector("#reactants"),
  products: document.querySelector("#products"),
  form: document.querySelector("#equationForm"),
  check: document.querySelector("#checkButton"),
  next: document.querySelector("#nextButton"),
  hint: document.querySelector("#hintButton"),
  reset: document.querySelector("#resetButton"),
  shuffle: document.querySelector("#shuffleButton"),
  atomTable: document.querySelector("#atomTable"),
  balanceStatus: document.querySelector("#balanceStatus"),
  coachNotes: document.querySelector("#coachNotes"),
  attemptCount: document.querySelector("#attemptCount"),
  completedCount: document.querySelector("#completedCount"),
  missionList: document.querySelector("#missionList"),
  badges: {
    first: document.querySelector("#badgeFirst"),
    streak: document.querySelector("#badgeStreak"),
    master: document.querySelector("#badgeMaster"),
  },
};

function shuffleMissions() {
  const order = missions.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }
  return order;
}

function currentMissionIndex() {
  return state.order[state.position] ?? 0;
}

function currentMission() {
  return missions[currentMissionIndex()];
}

function parseFormula(formula) {
  let index = 0;

  function readNumber() {
    let digits = "";
    while (/\d/.test(formula[index])) {
      digits += formula[index];
      index += 1;
    }
    return digits ? Number(digits) : 1;
  }

  function readGroup() {
    const counts = {};

    while (index < formula.length && formula[index] !== ")") {
      if (formula[index] === "(") {
        index += 1;
        const groupCounts = readGroup();
        index += 1;
        const multiplier = readNumber();
        addCounts(counts, groupCounts, multiplier);
        continue;
      }

      const match = formula.slice(index).match(/^([A-Z][a-z]?)/);
      if (!match) {
        index += 1;
        continue;
      }

      const symbol = match[1];
      index += symbol.length;
      counts[symbol] = (counts[symbol] || 0) + readNumber();
    }

    return counts;
  }

  return readGroup();
}

function addCounts(target, source, multiplier = 1) {
  Object.entries(source).forEach(([atom, count]) => {
    target[atom] = (target[atom] || 0) + count * multiplier;
  });
}

function countsForSide(formulas, coefficients) {
  return formulas.reduce((totals, formula, formulaIndex) => {
    addCounts(totals, parseFormula(formula), coefficients[formulaIndex] || 0);
    return totals;
  }, {});
}

function getCoefficients() {
  return [...document.querySelectorAll(".coefficient-input")].map((input) => {
    const value = Number(input.value);
    return Number.isInteger(value) && value > 0 ? value : 0;
  });
}

function getMissionCounts(coefficients = getCoefficients()) {
  const mission = currentMission();
  const reactantCoefficients = coefficients.slice(0, mission.reactants.length);
  const productCoefficients = coefficients.slice(mission.reactants.length);

  return {
    reactants: countsForSide(mission.reactants, reactantCoefficients),
    products: countsForSide(mission.products, productCoefficients),
  };
}

function getAtoms(counts) {
  return [...new Set([...Object.keys(counts.reactants), ...Object.keys(counts.products)])].sort();
}

function isBalanced(counts) {
  return getAtoms(counts).every((atom) => counts.reactants[atom] === counts.products[atom]);
}

function isSmallestRatio(coefficients, answer) {
  return coefficients.every((coefficient, index) => coefficient === answer[index]);
}

function formulaHtml(formula) {
  return formula.replace(/(\d+)/g, "<sub>$1</sub>");
}

function renderFormulaSide(container, formulas, offset) {
  container.innerHTML = "";
  formulas.forEach((formula, index) => {
    if (index > 0) {
      const plus = document.createElement("span");
      plus.className = "plus";
      plus.textContent = "+";
      container.append(plus);
    }

    const token = document.createElement("label");
    token.className = "formula-token";
    token.innerHTML = `
      <input
        class="coefficient-input"
        inputmode="numeric"
        min="1"
        max="20"
        type="number"
        value="1"
        aria-label="Coefficient for ${formula}"
        data-index="${offset + index}"
      />
      <span class="formula">${formulaHtml(formula)}</span>
    `;
    container.append(token);
  });
}

function renderAtomTable(counts = getMissionCounts()) {
  const atoms = getAtoms(counts);
  const highest = Math.max(1, ...atoms.flatMap((atom) => [counts.reactants[atom] || 0, counts.products[atom] || 0]));

  els.atomTable.innerHTML = atoms
    .map((atom) => {
      const reactantCount = counts.reactants[atom] || 0;
      const productCount = counts.products[atom] || 0;
      const balanced = reactantCount === productCount;
      return `
        <div class="atom-row">
          <span class="atom-symbol">${atom}</span>
          <div class="atom-bars" aria-label="${atom}: reactants ${reactantCount}, products ${productCount}">
            <div class="bar-track"><div class="bar-fill" style="width:${(reactantCount / highest) * 100}%"></div></div>
            <div class="bar-track"><div class="bar-fill product" style="width:${(productCount / highest) * 100}%"></div></div>
          </div>
          <span class="atom-counts">${reactantCount}:${productCount} ${balanced ? "✓" : ""}</span>
        </div>
      `;
    })
    .join("");
}

function renderMissionList() {
  els.missionList.innerHTML = state.order
    .map((missionIndex, position) => {
      const mission = missions[missionIndex];
      const done = state.completed.has(missionIndex);
      const active = state.position === position;
      return `
        <button class="mission-item ${done ? "done" : ""} ${active ? "active" : ""}" type="button" data-position="${position}">
          <span class="mission-index">${done ? "✓" : position + 1}</span>
          <span>
            <span class="mission-name">${mission.title}</span>
            <span class="mission-difficulty">${mission.difficulty}</span>
          </span>
          <span class="mission-difficulty">${mission.tag}</span>
        </button>
      `;
    })
    .join("");
}

function renderProgress() {
  els.xp.textContent = state.xp;
  els.streak.textContent = state.streak;
  els.level.textContent = Math.floor(state.xp / 120) + 1;
  els.completedCount.textContent = `${state.completed.size}/${missions.length}`;
  els.badges.first.classList.toggle("earned", state.mastered.size >= 1);
  els.badges.streak.classList.toggle("earned", state.streak >= 3);
  els.badges.master.classList.toggle("earned", state.completed.size === missions.length);
}

function renderMission() {
  const missionIndex = currentMissionIndex();
  const mission = currentMission();
  state.attempts = 0;
  state.solvedCurrent = state.completed.has(missionIndex);

  els.missionTag.textContent = mission.tag;
  els.missionTitle.textContent = mission.title;
  els.missionContext.textContent = mission.context;
  els.reactionType.textContent = mission.type;
  els.next.disabled = !state.solvedCurrent;
  els.balanceStatus.textContent = state.solvedCurrent ? "Solved" : "Ready";
  els.balanceStatus.className = `status-pill ${state.solvedCurrent ? "good" : ""}`;
  els.attemptCount.textContent = "0 tries";
  els.coachNotes.textContent = "Start with the element that appears in the fewest formulas, then leave oxygen and hydrogen until later.";

  renderFormulaSide(els.reactants, mission.reactants, 0);
  renderFormulaSide(els.products, mission.products, mission.reactants.length);
  renderAtomTable();
  renderMissionList();
  renderProgress();
}

function saveProgress() {
  localStorage.setItem("balanceQuestXp", String(state.xp));
  localStorage.setItem("balanceQuestStreak", String(state.streak));
  localStorage.setItem("balanceQuestCompleted", JSON.stringify([...state.mastered]));
}

function buildFeedback(counts) {
  const atoms = getAtoms(counts);
  const offAtoms = atoms.filter((atom) => counts.reactants[atom] !== counts.products[atom]);
  if (!offAtoms.length) {
    return "The atoms match on both sides. Now make sure the coefficients are in the smallest whole-number ratio.";
  }

  const [first] = offAtoms;
  const reactantCount = counts.reactants[first] || 0;
  const productCount = counts.products[first] || 0;
  const side = reactantCount < productCount ? "reactant" : "product";
  return `<strong>${first}</strong> is not balanced yet: reactants have ${reactantCount}, products have ${productCount}. Add atoms by changing a coefficient on the ${side} side.`;
}

function awardMission() {
  const missionIndex = currentMissionIndex();
  if (state.completed.has(missionIndex)) {
    return;
  }

  const baseXp = 80;
  const speedBonus = Math.max(0, 30 - state.attempts * 5);
  const streakBonus = Math.min(40, state.streak * 8);
  state.xp += baseXp + speedBonus + streakBonus;
  state.streak += 1;
  state.completed.add(missionIndex);
  state.mastered.add(missionIndex);
  saveProgress();
}

function checkBalance() {
  const mission = currentMission();
  const coefficients = getCoefficients();
  const counts = getMissionCounts(coefficients);
  const balanced = isBalanced(counts);
  const smallest = isSmallestRatio(coefficients, mission.answer);

  state.attempts += 1;
  els.attemptCount.textContent = `${state.attempts} ${state.attempts === 1 ? "try" : "tries"}`;
  renderAtomTable(counts);

  if (coefficients.includes(0)) {
    els.balanceStatus.textContent = "Check inputs";
    els.balanceStatus.className = "status-pill bad";
    els.coachNotes.textContent = "Use positive whole numbers only. Coefficients can be 1, but blanks and 0s cannot balance an equation.";
    els.form.classList.add("shake");
    setTimeout(() => els.form.classList.remove("shake"), 330);
    state.streak = 0;
    saveProgress();
    renderProgress();
    return;
  }

  if (balanced && smallest) {
    awardMission();
    state.solvedCurrent = true;
    els.balanceStatus.textContent = "Balanced";
    els.balanceStatus.className = "status-pill good";
    els.coachNotes.innerHTML = `<strong>Correct.</strong> ${coefficients.join(" : ")} is the smallest whole-number ratio for this equation.`;
    els.next.disabled = false;
    renderMissionList();
    renderProgress();
    return;
  }

  if (balanced && !smallest) {
    els.balanceStatus.textContent = "Reduce ratio";
    els.balanceStatus.className = "status-pill bad";
    els.coachNotes.innerHTML = "The atoms balance, but the ratio can be reduced. Divide every coefficient by the same number until the smallest whole-number ratio remains.";
    return;
  }

  state.streak = 0;
  saveProgress();
  renderProgress();
  els.balanceStatus.textContent = "Unbalanced";
  els.balanceStatus.className = "status-pill bad";
  els.coachNotes.innerHTML = buildFeedback(counts);
  els.form.classList.add("shake");
  setTimeout(() => els.form.classList.remove("shake"), 330);
}

function showHint() {
  const mission = currentMission();
  els.coachNotes.innerHTML = `<strong>Hint:</strong> ${mission.hint}`;
}

function resetInputs() {
  document.querySelectorAll(".coefficient-input").forEach((input) => {
    input.value = "1";
  });
  els.balanceStatus.textContent = state.solvedCurrent ? "Solved" : "Ready";
  els.balanceStatus.className = `status-pill ${state.solvedCurrent ? "good" : ""}`;
  els.coachNotes.textContent = "Reset to invisible 1s. Count each atom from there, then change one coefficient at a time.";
  renderAtomTable();
}

function goNext() {
  const nextUnsolved = state.order.findIndex((missionIndex, position) => position > state.position && !state.completed.has(missionIndex));
  if (nextUnsolved !== -1) {
    state.position = nextUnsolved;
  } else {
    state.position = (state.position + 1) % state.order.length;
  }
  renderMission();
}

function startRandomRun() {
  state.order = shuffleMissions();
  state.position = 0;
  state.completed.clear();
  state.solvedCurrent = false;
  els.coachNotes.textContent = "Fresh run loaded. The same chemistry rules apply, but the mission order has been shuffled.";
  renderMission();
}

els.check.addEventListener("click", checkBalance);
els.next.addEventListener("click", goNext);
els.hint.addEventListener("click", showHint);
els.reset.addEventListener("click", resetInputs);
els.shuffle.addEventListener("click", startRandomRun);
els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkBalance();
});
els.form.addEventListener("input", () => renderAtomTable());
els.missionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-position]");
  if (!button) {
    return;
  }
  state.position = Number(button.dataset.position);
  renderMission();
});

state.order = shuffleMissions();
renderMission();
