from datetime import date, datetime

def calculate_age(birth_date):
    # Convert birth date string to date object
    date_birthday = datetime.strptime(birth_date, '%Y-%m-%d')
    # birth_date = date.fromisoformat(birth_date)

    # Get today's date
    today = date.today()

    # Calculate age in years
    age = today.year - date_birthday.year - \
        ((today.month, today.day) < (date_birthday.month, date_birthday.day))

    return age