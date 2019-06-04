#!/usr/bin/env python3
"""
Module Docstring
"""

import urllib.request
from bs4 import BeautifulSoup


def get_html(url):
    response = urllib.request.urlopen(url)
    return response.read()

def parse(html):
    soup = BeautifulSoup(html, features = 'html.parser') 
    table = soup.find('tbody')

    countries = []

    for row in table.find_all('tr')[1:]:
        cols = row.find_all('td')

        countries.append({
            'title': cols[0].a.text,
            'visa_requirement': cols[1].text.strip(),
            'allowed_stay': cols[2].text.strip(),
            'Notes': cols[3].text.strip()
            })

    for country in countries:
        print(country)

def main():
    parse(get_html('https://en.wikipedia.org/wiki/Visa_requirements_for_Moldovan_citizens'))


if __name__ == '__main__':
    main()

