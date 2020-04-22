#!/usr/bin/env python3

# Imports ---------------------------------------------------------------------

from bs4 import BeautifulSoup
import csv
from googlesearch import search
import requests
from urllib import HTTPError
from time import sleep

# Constants -------------------------------------------------------------------

GOOGLE_BASE_URL = 'https://google.com/'
WIKIPEDIA_BASE_URL = 'https://en.wikipedia.org/'


# Classes ---------------------------------------------------------------------

class Candidate:

    def __init__(self, candidate_name: str, url: str):
        response = requests.get(url)

        if response.status_code != 200:
            print(f'Failed to get {candidate_name}\'s webage. Response: {response.status_code}')
            raise HTTPError

        soup = BeautifulSoup(response.text, 'html.parser')

        # Save the first paragraph
        # paragraph with a parent of div (class: mw-parser-output)
        self.summary = soup.select_one('div.mw-parser-output > p')

        self.infobox = parse_infobox(soup)

        def parse_infobox(soup: BeautifulSoup):
            # Select a table with the class infobox and vcard
            infobox_tag = soup.select_one('table.infobox.vcard')
            table_rows = infobox_tag.select('tr')
            parsed_infobox = {}
            try:
                # It's not clear to me that all of our candidate will have
                # all of the specific fields I look for.
                parsed_infobox['image_url'] = infobox_tag.select_one('a.image')['href']
            except Exception:
                # Suppress exceptions,
                # I shouldn't fail just because someone doesn't have a selfie
                pass
            



# Functions -------------------------------------------------------------------

# Main ------------------------------------------------------------------------

# In total honesty, this searching method is a pretty roundabout way to go through
# finding the candidate's wikipedia page. In my own testing, I can pretty much guess
# exactly what the wiki url will be, and search directly on wikipedia normally pulls up
# the right page. However, there's no guarantee that I won't at some point get Wikipedia's
# disambiguation page. That's what this method is trying to avoid.


if __name__ == '__main__':
    # Build a list of our candidates names from
    # the database spreadsheet
    with open('Candidates_Database_Master.csv', newline='') as candidate_file:
        candidate_reader = csv.reader(candidate_file)
        candidate_reader.next()  # Skip the headers
        candidate_list = [row[1]
                          for row in candidate_reader]  # Store the common names

    for candidate_name in candidate_list:
        # Build Query

        query = f'{candidate_name} chicago wikipedia'

        # Search

        print(f'Searching for {candidate_name} ...')

        search_results = search(
            query,
            tld='org',
            lang='en',
            num=10,
            start=0,
            stop=0,
            pause=2.0)

        # Find the wikipedia page in search results

        wiki_links = filter(
            lambda url: True if WIKIPEDIA_BASE_URL in url else False,
            search_results)

        # Parse the wikipedia page
        # I'm gonna guess that the first wiki link is probably the right one.
        # Google seems pretty good at finding these.



        # Output to json

        sleep(1)  # Manual rate limit
