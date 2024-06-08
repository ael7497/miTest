'''Это тестовый файл, который потом будет удалён'''

test = [
    [3, 'Внутренний'],
    [4, 'Телесный'],
    [2, 'Вербальный'],
    ]
'''изменение'''
#получаемые из формы данные
intellect = 'Телесный'
change = -2
#изменение
# print(test)
for l in test:
    if l[1] == intellect:
        l[0] += change
# print(test)
'''вывод'''
print(max(test))
print(max(test)[1])