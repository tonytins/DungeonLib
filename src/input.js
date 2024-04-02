const modifier = (text) => {

    let mText = text;

    if (!state.spells) {
        state.spells = [];
    }

    const spells = {
        'MAGE HAND': 'creating a spectral floating hand to manipulate objects',
        'PRESTIDIGITATION': 'performing minor magical tricks and effects',
        'LIGHT': 'creating a bright light',
        'MENDING': 'repairing a single break or tear in an object',
        'MESSAGE': 'sending a whispered message',
        'MINOR ILLUSION': 'creating a sound or an image of an object'
    };

    const lowered = text.toLowerCase();

    for (spellName in spells) {
        if (lowered.includes('cast ' + spellName.toLowerCase())) {
            if (!state.spells.includes(spellName)) {
                state.spells.push(spellName);
            }
            mText = text + '\n' + 'You cast ' + spellName.toLowerCase() + ', ' + spells[spellName];
        }
    }

    const dndSkills = {
        'Acrobatics': getRandomNumber(1, 20),
        'Animal Handling': getRandomNumber(1, 20),
        'Arcana': getRandomNumber(1, 20),
        'Athletics': getRandomNumber(1, 20),
        'Deception': getRandomNumber(1, 20),
        'History': getRandomNumber(1, 20),
        'Insight': getRandomNumber(1, 20),
        'Intimidation': getRandomNumber(1, 20),
        'Investigation': getRandomNumber(1, 20),
        'Medicine': getRandomNumber(1, 20),
        'Nature': getRandomNumber(1, 20),
        'Perception': getRandomNumber(1, 20),
        'Performance': getRandomNumber(1, 20),
        'Persuasion': getRandomNumber(1, 20),
        'Religion': getRandomNumber(1, 20),
        'Sleight of Hand': getRandomNumber(1, 20),
        'Stealth': getRandomNumber(1, 20),
        'Survival': getRandomNumber(1, 20)
    };

    state.skills = dndSkills;
    // state.skillPoints = 5;
    state.disableRandomSkill = true;

    return { text: mText };
}

// Don't modify this part
modifier(text)