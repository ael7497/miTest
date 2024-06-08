import sqlite3

def do(query, *args):
    conn = sqlite3.connect('test.db')
    cursor = conn.cursor()
    cursor.execute(query, *args)
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return data

if __name__ == '__main__':
    print(do('''SELECT * FROM intellect'''))