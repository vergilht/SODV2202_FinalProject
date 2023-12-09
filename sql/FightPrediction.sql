USE master
GO

-- If the database already exists, drop it
DROP DATABASE IF EXISTS [$(FightPrediction)]
GO

-- Create the database
CREATE DATABASE FightPrediction

USE FightPrediction

-----------------------------------------------------------------------------------------------------------------------
-- Create the tables

CREATE TABLE fighter (
  fighter_id			INT UNIQUE NOT NULL IDENTITY (1,1),
  fighter_fname			VARCHAR(255) NOT NULL,
  fighter_lname			VARCHAR(255) NOT NULL,
  fighter_nickname		VARCHAR(255),
  team_name				VARCHAR(255) NOT NULL,
  height				DECIMAL(5,2) NOT NULL,
  weight				DECIMAL(5,2) NOT NULL,
  birthdate				DATE NOT NULL,
  reach					DECIMAL(5,2) NOT NULL,
  stance				VARCHAR(255) NOT NULL,
  weightclass			VARCHAR(255) NOT NULL,
  wins					INT NOT NULL,
  ranking				INT NOT NULL,
);

CREATE TABLE fight (
    fight_id			INT UNIQUE NOT NULL IDENTITY (1,1),
    event_name          VARCHAR(255) NOT NULL,
    fighter1_id			INT NOT NULL,
    fighter2_id			INT NOT NULL,
    weightclass			VARCHAR(255) NOT NULL,
    location			VARCHAR(255) NOT NULL,
    date				DATETIME NOT NULL,
    promotion_name		VARCHAR(255) NOT NULL,
    FOREIGN KEY (fighter1_id) REFERENCES fighter(fighter_id),
    FOREIGN KEY (fighter2_id) REFERENCES fighter(fighter_id)
);

-----------------------------------------------------------------------------------------------------------------------
-- Insert data into the tables
INSERT INTO fighter (fighter_fname, fighter_lname, fighter_nickname, team_name, height, weight, birthdate, reach, stance, weightclass, wins, ranking)
VALUES
    ('Jailton',		'Almeida',		'Malhadinho',				'LG System',			6.3,	236.0,	'1991-06-26',	79.0,	'Orthodox',		'Heavyweight',			20,		6),
    ('Derrick',		'Lewis',		'The Black Beast',			'4oz Fight Club',		6.3,	265.0,	'1985-02-07',	79.0,	'Orthodox',		'Heavyweight',			27,		12),
    ('Rodrigo',		'Nascimento',	'Ze Colmeia',				'American Top Team',	6.2,	264.0,	'1992-11-26',	80.0,	'Orthodox',		'Heavyweight',			11,		18),
    ('DonTale',	'Mayes',		'Lord Kong',				'Jackson-Wink MMA',		6.6,	264.0,	'1992-01-16',	81.0,	'Orthodox',		'Heavyweight',			10,		26),
    ('Armen',		'Petrosyan',	'Superman',					'Academy MMA',			6.3,	186.0,	'1990-11-03',	71.0,	'Orthodox',		'Light Heavyweight',	9,		41),
    ('Vitor',		'Petrino',		'Icao',						'CM System',			6.2,	206.0,	'1997-08-28',	77.5,	'Orthodox',		'Light Heavyweight',	10,		28),
    ('Modestas',	'Bukauskas',	'The Baltic Gladiator',		'Gintas Combat',		6.3,	205.5,	'1994-02-10',	78.0,	'Switch',		'Light Heavyweight',	15,		30),
    ('Gabriel',		'Bonfim',		'Marretinha',				'Cerrado MMA',			6.1,	170.5,	'1997-08-20',	72.5,	'Orthodox',		'Welterweight',			15,		39),
    ('Nicolas',		'Dalby',		'Danish Dynamite',			'Rumble Sports',		5.11,	170.5,	'1984-11-16',	74.5,	'Orthodox',		'Welterweight',			23,		19),
    ('Rinat',		'Fakhretdinov',	'Gladiator',				'American Top Team',	6.0,	170.5,	'1991-09-28',	74.0,	'Orthodox',		'Welterweight',			21,		17),
    ('Elizeu',		'Zaleski',		'Capoeira',					'CM System',			5.11,	171.0 ,	'1986-11-12',	73.0,	'Orthodox',		'Welterweight',			24,		20),
    ('Caio',		'Borralho',		'The Natural',				'Fighting Nerds',		5.10,	186.0 ,	'1993-01-16',	75.0,	'Southpaw',		'Middleweight',			15,		14),
    ('Darren',		'Till',			'The Gorilla',				'Team Kaobon Liverpool',6.0,	184.5 ,	'1992.12.24',	75.0,	'Orthodox',		'Middleweight',			18,		48),
    ('Rodolfo',		'Vieira',		'The Black Belt Hunter',	'Team Nogueira',		6.0,	186.0,	'1989-09-25',	73.0,	'Orthodox',		'Middleweight',			9,		40),
    ('Ismael',		'Bonfim',		'Marreta',					'Cerrado MMA',			5.8,	156.0,	'1995-12-28',	71.0,	'Orthodox',		'Lightweight',			19,		32),
    ('Vinc',		'Pichel',		'From Hell',				'FactoryX Muay Thai',	5.1,	155.5,	'1982-11-23',	72.0,	'Orthodox',		'Lightweight',			14,		42),
    ('Victor',		'Hugo',			'Striker',					'Astra Fight Team',		5.7,	135.5,	'1992-11-22',	71.0,	'Orthodox',		'Bantamweight',			24,		128),
    ('Daniel',		'Marcos',		'Soncora',					'American Combat Gym',	5.7,	136.0,	'1993-03-07',	69.0,	'Orthodox',		'Bantamweight',			15,	    27)

INSERT INTO fight (event_name, fighter1_id, fighter2_id, weightclass, location, date, promotion_name)
VALUES
    ('UFC 300',			1,				2,				'Heavyweight',			'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 300',			3,				4,				'Heavyweight',			'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 300',			5,				6,				'Light Heavyweight',	'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 300',			8,				9,				'Welterweight',			'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 300',			10,				11,				'Welterweight',			'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 300',			12,				13,				'Welterweight',			'Sao Paulo, BRA',	'2024-01-23',	'Ultimate Fighting Championship'),
    ('UFC 301',			15,				16,				'Lightweight',			'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship'),
    ('UFC 301',			17,				18,				'Bantamweight',			'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship'),
    ('UFC 301',			1,				3,				'Heavyweight',			'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship'),
    ('UFC 301',			2,				4,				'Heavyweight',			'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship'),
    ('UFC 301',			5,				7,				'Light Heavyweight',	'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship'),
    ('UFC 301',			12,				14,				'Light Heavyweight',	'Boston, USA',		'2024-02-19',	'Ultimate Fighting Championship')




