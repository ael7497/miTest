from professions.professions import professions
def get_prof_list(intellects, personalities) -> list:
    intellectProfList = []
    personalityProfList = []
    [intellectProfList.extend(professions[intellect]) for intellect in intellects]
    [personalityProfList.extend(professions[personality]) for personality in personalities]
    return list(set(intellectProfList).intersection(personalityProfList))