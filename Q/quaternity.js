var avatar_xp = 0;
var wealth = 0;
var ethics = 0.5;
var morality = 0.5;
var sections = [];

function createDirection(name, alignment, element, species) {
    this.name = name;
    this.alignment = alignment;
    this.element = element;
    this.species = species;
}

function createQuarter(name, lang, power, military) {
    this.name = name;
    if(lang) {
        this.lang = lang;
    }
    if(power) {
        this.power = power;
    }
    if(military) {
        this.military = military;
    }
}

function negotiate_profiteer() {
    dAvatarXP = 1;
    dWealth = 1;
    avatar_xp += dAvatarXP;
    wealth += dWealth;
    var i = Math.ceil(Math.random()*4)-1;
    if(i < 2) {
        morality += -0.1;
        if(i < 1) {
            ethics += 0.1;
        } else {
            ethics += -0.1;
        }
    } else {
        morality += 0.1;
        if(i > 2) {
            ethics += 0.1;
        } else {
            ethics += -0.1;
        }
    }
    document.getElementById("results").innerHTML = "Results: " + quotes[i][Math.ceil(Math.random()*quotes[i].length)-1];
    document.getElementById("XP_wealth").innerHTML = "XP: " + avatar_xp + "; Wealth: " + wealth;
    document.getElementById("ethics_morality").innerHTML = "Ethics: " + ethics + "; Morality: " + morality + "\n"; 
    play(melodies[i][Math.ceil(Math.random()*melodies[i].length)-1]);
}

const quotes = [
    NF = [
        "Let me check what I have in my speciality cognitive-affective empathy matrix... hold on, just a couple of transforms, and maybe some of ideas will get a peter hard... eh, I think not. Stinkyfoot! With grease! Rub-a-dub-dub! Holy mackerel! Coconut chocolate cake! They were off like a turd of hurdles - I mean, a herd of turtles! Mama curry! I like some toast with my pills! I have diabetes, and neuropathy II! Good... night; ...it's hotter-than-a-pistol! We don't need any o' them...",
        "It's very funny to be a frog. You can dive into the water, and cross the rivers and the oceans, and you can jump all the time and everywhere. Do you want to play with me? We can be a whole group of friends, a whole group of frogs, jumping into the streets.",
        "Now those are some serious castles in the sky: chasing rainbows for a lifetime, then left to go, like shadows from the sun. Whoa, Heaven let your light shine down!",
        "When it's Christmas at ground zero, it's time for the season of bells... you don't wanna know man! Well, the change is here, and the future clear, I can feel it coming; so full of hate, it's getting late; yeah, I know it's coming. This land is my land, this land is my land, i've got some hot sauce, with some ghost pepper, if you don't get off, i'll make you drink it: this land, is private property!",
        "Maybe, if the geneva convention permits, we can try to hire a suicide forest chainsaw seppuku drill seargent - I mean, live organ donation tutor: kidney, lung, testicle, arm, leg! Such beautiful assets plus vroom-vroom makes a truly macabre museum to behold!",
        "Nobody expects the knights of the spanish inquisition who say Ni! You will stay in the rack, and attract... a herrer; and you will sit in the comfy chair, and fetch... a shrubber!",
        "It is I, the plague doctor: would you like to go sparring? Please, sir: may I please have some more?",
        "Dark corner the square; intelligence is disease... The sands of time, were eroded by, the river, of constant change.",
        "You may've been gipp'd... but hopefully you weren't whipp'd! When life gives you lemons, you make cities - yay! Just a little more milk, and it makes my day!",
        "Musical chairs, on fire; des & troy build des & troy! Look how big it is; look how big it is!",
        "One of the first exercise routines: running towards or from your shadow! Run fast, lest the hanging bloody dog be hallowed as fast as you can say drip-drop!",
        "Their prison is only in their own minds, yet they are in that prison; and are so afraid of being taken in that they cannot be taken out.",
        "A tale has been told of a sled jump, in which wolfychu makes noises there, pretending to be someone's stepsister: if you can go off the jump without running her over - possibly reaching a bridge posture in the middle of the jump - you may as well have an instinct or 2 for kinesthetics!",
        "In recent times, one of the cases of Pickman's model exists as a tryptophobial enwebbing of so-called teratoma-children's 2nd decay! If ye desire bone/cartilege/muscle/hair/skin/nerve colonies, then perhaps you will find santuary in their midst!",
        "Here's the database: make your query (that is, choose your weapon)!",
        "Gibbe-d'gibbe-d'gibbe-d'gibbe-d'bussy, boss; eat my children, eat my children! Shoot that poison arrow, through my heart!",
        "Informaleadership 2.5 second summary of war & peace: shall we go in peace, or in pieces; go to war, or go to wars?",
        "Party on, dudes! Be excellent to one another!",
        "Control whether you seem to have a spine or not, and your posturing many influence many animals...",
        "Troll-ey mol-ey, that's one big rig; are you sure its dead?",
        "A nameless baby was left on a random porch, and began to do pull-ups on the door knocker! Scream; scream; little maggot!",
        "Are you out of paper & ink? Well quit, printer: that's all you had to say!"
    ],
    NT = [
        "Here we go looby loo, here we go looby light, here we go looby loo, all on a Saturday night... hey-a-oooh, you-a-oooh, does your waifu knooooow, you're going down the roooaad, to see your little husbandoooo?",
        "4 states of matter, used to seduce them: they were traumatized; they were mortified; they were nothing! Think of the word: vote! Those tangle faires must have been in your hair last night: it's decomposing! There's no more ingredients left over; these are pitiful! Well, hello: ...where's the beef?",
        "Bread, child, we need bread! This is the corporate office policy: we need bread, child, bread now! Why might you be provided with such a hard head, and I with such a hard pelvis? Because we may or may not have been integrated with those animistic (e.g. holstauric) priveleges - that is, if we drink our milk: what little poison to worry about! There's a little something on your face: maybe if you put some bread & milk on it, the catfolk will bite & lick it off.",
        "You're not even human(s), anymore... You'll make a martyr of me! Hmmmmmmm, stoic one, hmmmmmmm: hoist... the jolly roger... Hey-hey, god-mass, ho-ho! The miners you've made have fetished too deep... It's the hard rock blues! Nonetheless, there may be a reward if you can say sludgefilth in 5 languages simultaneously! Erytin - evryting - everything goin'-be-iree, man!",
        "And that, was: my animus... function! Rooooole-plaaaaay... it appears now, that the control group, has confirmed... the contrope! Vibe check! You failed!",
        "We will provide... the signature: to the contract for the grant to the museum park... but wait, Kung Fuhrer, I can walk! Up at the sky; down at the ground; right over there; i'm gonna bounce!",
        "I can control anything that's empty; the moment is eternal. Alas, a person is not so simple as to be a bag ADT - yet one may be a set ADT, however!",
        "Fear, does not exist, in this dojo! We will plan, design, implement, and maintain, the complex typography fetish! Schizophrenic self-portraits, that King-in-Yellow's rich; you don't even know that you're alive, lich!",
        "Hey, now, hey now now, I wanted to show you some fetishes, hey, now, hey now now, I saying there's fetishes to be found! Drive that mother, down into your spine! Come, come, into my coven: become a member, become a member of witchcraft! Dark well, 8 miles deep, forgotten by mortals; blood is an energy conductor, they've left it to be found! To eat a cake, degeration; the greener grass, the free real estate!",
        "An anonymous thing encountered something messing with a plant substance: after duplicating the behavior of this entity, it stated: i've got splinters in my toungue; i've got splinters in my toungue! After calculating a risk assessment, it is now... a certified member... of the 7... psychopaths...",
        "If nihilism - what one must distract oneself from - is the truth of the universe, then agnosticism is a good... faith?",
        "It is thought that the complexity of a K4 graph may be sufficient in beauty to significantly sway observers to more positive belief in the credibility of a product. A mad scientist who heard of this once made a massload of bayou-themed herbal Cola de Cocaina with monochromatic illustrations of K4 cultists slicing up pieces of meat and feeding them to K4 dragonflies: afterwards, a randomly-chosen test subject was told: you... can... take it!",
        "Shoob, shoob, in my lube...? Is there so much oil on this plate, that the U.S. tried to invade it? Pie lesu domine, dona eis requiem... this is how we do it! We will begin the pushup test. Ready? Begin: down, up, down, up... woah-cod, cod-woah! Be careful, something here may known about pressure points; fine, then, be that way!",
        "The gods love your marvelous city, and walk no more in the ways of the gods. They have forgotten the high places of earth, and the mountains that knew their youth. The earth has no longer any gods that are gods, and only the Other Ones from outer space hold sway on unremembered Kadath. If the oldest emotion of humanity is fear, and the oldest fear is that of the unknown, then perhaps it is worth proposing that the greatest thing unbeknowable may be as follows: dead, or alive? Let him not vow to walk in the dark, who has not seen the nightfall; imagination is the only weapon in the war with reality.",
        "Ah man, their faces were so pale, like they just went on the big-kitty goth generator! Yeah, that was good! On with the theater!",
        "An instance case of a chupecabra was recorded as follows: a subject scantily clad in sports gear made of goat bones wandered into a laundry room, retrieved some sort of battery-powered handheld item, loudly questioned what it was, inserted it in his mouth, shrugged, and put it back in the washing mashine, ultimately to declare it an uneccessary artifact to enter the devil's anus.",
        "If not administered carefully, a beautiful prussian princess winter chainmail coat may contribute to appropriaton of reincarnation rites.",
        "Imagine a black snake is gently crawling inside your stomach, while my melancholy blues is playing. Imagine that your mind contains a black cauldron, which may be filled with beautiful audiovisually-induced ingredients. In time, a psychopath around you may combine these techniques to allow you to become a snake loli to the extent of a gonk droid!",
        "Did someone just get their headphones hacked by an autistic kid, and their speaker hacked by a schizo kid? Au-tis-tic fan-ta-sy, plus Schiz-oid fan-ta-sy!",
        "There is no one that I love; but there are those that I hate... the objective/subjective interplay of weather & sleep may be predicted no easier than an apocalyptically immoral/unethical action may be upheld.",
        "What, is your name? What, is your quest? What, is your favorite color?",
        "Hell is empty and all the devils are here; expand the program so more people can join it!",
        "List of retention achievements: vomit, blood, snot, urine, feces; try all simultaneously!",
        "Guidelines for venus flytrap bed hazing are as follows: night-light, appropriated dream catcher, bleach in the sheets, and 102 BPM C major bedtime propaganda song!",
        "Consider this question, look deep inside, deliver a true confession, what are you willing to live for? Consider this question, open your eyes, examine your own reflection, what are you willing to die for? When your backs' against the wall, and the times uncertain, consider this question, no standing by when flesh and blood are threatened, what are you willing to kill for?",
        "Oh whoops, ooh! I dropped my monster gambling speaker that I use for my magnum fallacy song! Come on fellers, let's go mining! Digging up our own digging... fool's silver & fool's gold... woah, we found a sarlacc pit: mein chunka, it's Jabba the Hutt; the stars are right!",
        "A reply generator may be filled as follows: (adjective) (noun) of (noun), (name). It may be helpful to check out the applications of (noun).",
        "planning/denial: baka/dan/dere (?), 2, 5\n"+"analysis/bargaining: yan (air), 7, 17, 37, 47, 67, 97, 107, 127, 137\n"+"design/anger: tsun (water), 3, 13, 23, 43, 53, 73, 83, 103, 113\n"+"implementation/depression: shun (fire), 11, 31, 41, 61, 71, 101, 131\n"+"maintenance/acceptance: kuu (earth), 19, 29, 59, 79, 89, 109",
        "Ready at last, after centuries of incubation! A boy or a girl? I think it's a bit early to start imposing roles, don't you?",
        "Numerous cases tell of concave up defenses against concave down offenses - the facial expression says it all. What implications might this hold for evolutionary psychology? Perhaps it may be merely be an angular means of hinting at the status of one's digestive system, no?",
        "How do you multiply the length of a vector by 2? B-b-b-b-baka... b-b-baka, oh... you'll make a gaaaaahhd-lass of me!",
        "While the earth may not currently be flat, the derivative may be considered flat, as the earth, in fact, is getting flat-ter! Thanks a lot, centrifugal force - love your work!",
        "Euler spirals may contain primes, arrowheads may contain metallics! How else to horizontally & vertically scale than this?",
        "Oh, what a beatiful morning; oh, what a beatiful day; I've got a beautiful feeling; everything's going my way!",
        "Why send people to space? Presumably, their usage of exercise machines should allow some extent of kinetic energy to be converted/stored as electric battery power!", 
        "Oah puddin', p'tatocat: the little princess... she's just a bae-bee!"
    ],
    ST = [
        "What's your last name, weirdy? Butterscotch? Inconcievable! Why don't you take a break from your Standford prison experiment: go get a bubble gun, roll up inside a blanket, and give yourself a good ol' 7 chakra massage, as you wish! We must confirm the fact, that this posture would resemble an enormous schwanzschtücker, and that you would have made a yummy sound after putting on the ritz.",
        "Oh, did you go poo-poo on the potty? Goo-goo ga-ga, taco baby; goo-goo ga-ga. Oh-no; I wanna go up in there! No more of that skewer-rattle, until you're old enough for saizuri. Ich bin gut! However long I stay, I will never eat you. No more milk warmed up? Aight, thien... mango lassi for the baby? Guess what, chicken butt, fried and greased, want a piece? Tis' but a scratch! You snooze, you lose. Rock and roll, coo chi-coo! Put on your shooses - that's all she wrote. I'm fifty... and 1 sixth days away from eating the pantry out of commision.", 
        "The Balrog describes the following necrofantasial menu to the Orcs: skin ripped, flesh cut, bones torn (like maple tree-bark), warm beating blood heard with echolocation + viewed through the infrared-spectrum to be ultimately sapped (like maple syrup), and clusters of organs remaining to be handled (like seedy fruit).",
        "So... how'd you like the play? How'd you like to know my train-trolley-style, hunter-gatherer marketing algorithm? Well, here you have it: the more people I (b/f/k)ill, the more experience I get. Hurrah; the patterns of predator vs prey are in motion: drain the lizard! But where... is the squirrel?",
        "It's deformed! Pickup call! Wrooooong! Not a good gradient fetish. Why did that guy on the sidewalk have to start a hoooorrible white-male-idiot-conference? He oooobviously had to make a rip-off of I am become death, the destroyer of worlds. Yes; yes: I did in fact become a malignant politician upon life's green earth, and followed the Pirate Code! Whether ye be a pimp, or a prostobot, you have: one... rice point. And that's, the meta! What are we going to do, sit around like a bunch of crunchy hippies and not start the ahegao face company? Tuppence, tuppence; I got a rock... it's pretty dirt cheap, if you know what we keep! Thank you, come again!",  
        "Time to get up and make the donuts! Comrade, comrade, so glad to meet you again: there's a paaaarty, at this place, come and get your ice cream! Get in my belly; you got the sugar! Let's have a cook-out! Kaninchen mit salz und pfeffer; barbeque sauce on the lasagna with six cheeses! I'd like some mustard on my biscuits, mm-hm - I like pot-pie, too! What's up wichu, man? Hook a brother up; gimme some! A fire: now that's what i'm talking about!",
        "In the navy, Heinrich Himmler may have had a sort of sperm-head war-hat on, and upon coming up out of the water, gave a brutal handshake of a haze: up high, down low, in the middle, with a pickle, plus a nickel, just a little, hostel sickle, tickle tickle. This represented a potential mosquioto-like encounter tactic for a submarine to aim for the algorithmic fitty-fitty of an an aircraft carrier and discapacitate!",
        "Oh, yes, you would have been a very good creepypasta narrator! I am sorry, but the bus is full, you are going to have to sit on my lap! Would you like to build the next dungeon?",
        "I noticed you stubbed your toe: do you want me to amputate it? Hold your hay for your horses, you silly goose! Play one, look at the rest! Squeeze cheecks; read 'em and weep! No, please, i'm a virgin! Evil k-jawa, evil k-n'ewok, they're riding down on durge's trail without training wheels, without petals! But my dot card said: transmute, alter, morph, switch, I am lawless, you're a myth.",
        "An alternative history of the irish revolution recorded the following character: a british isles barbarian (who often said i'm from scotland and you're not) would serve as a crewmember wearing little more than an armoured kilt, wielding no more than a 7 ft. long blue-grey greatsword, sporting no more than a bag of golf clubs, playing no more than bagpipes for moral support, occassionaly would depend on oranges to reduce scurvy, and would act with relatively good manners to characters such as the tok-en, tok-en wom-an, wom-an! What a psychological dissolution campaign... oh, sorry i'm tardy! The solo trio? I thought it was a line! Great job, you 3: you made me nut! Wombo combo Those lapis lazuli jeans: what dingbattic fakery of wearable solar panels! Goodness gracious, there's even glasses with windhsield wipers & shoes with shovels: it's a wombo combo!",
        "You want to climb those heights to the top of the tree of porkchops & applesauce? Then all aboard - the bearfolk express! If you follow all your dreams, you might get lost; everybody's a comedian: hello my baby, hello my darling, hello my ragtime gal.",
        "Sewer fortress with aircraft carriers or submarines, even if the sound of it is something quite atrocious, if you say it loud enough you'll always sound precocious, sewer fortress with submarines or aircraft carriers!",
        "Darth Vader may at some point have been breathing with crunchy peanut butter spread all over his garbage bag, stated he was going to give someone a physical prior to fracking spinal fluid injection...",
        "Steiner, why you tripping, yo? Do you have a permit for those wheels? You're going to need a duck over the fence! Next time, it may be best to prioritize the mentally ill.",
        "This severed, snow-frozen cookie will make a fine addition to my... perishable assets. Would you like to see my ahegao face collection? How about we get some coleslack pie, in the wol-fy-chu!",
        "Hey, it's jorizzle: the super from across the street! How in the heck can I wash my neck if jorizzle has declared war?",
        "Are you ready for the ri-diiing; are you ready for the ring-grab-caaarousel? Are you ready for the run-niiing, are you ready for the warm-play-groouund? Are you ready for the boun-ciiing; are you ready for the tram-po-liiine? Are you ready for the ski-iiing; are you ready for the cold-ski-liiift?",
        "They're right next to you, they're right next to me, and I like 'em - they're as real as can be: creepy creatures!",
        "Who do you like? Cracklebeast? Down the wrong pipe? Yeah, that sounds like a pretty good psychopath! I feel you, I feel you for real... how about a game of energy grenade roulette?",
        "The beehive just went family style; that's messed up!",
        "The following musical genre keywords may be associated with passages from necronomincon: black, dark, drum & bass, psychobilly, industrial, gothic, rock, metal",
        "War; has taken its toll on you, the lines that crack your face! Famine; your body, it has torn through, withered in every place! Pestilence; for what you had to endure, and what you have put others through! Death; deliverance for you for sure, now there's nothing you can do!",
        "Ever witnessed an animal in the midst of its hormonal period being carried in wheelbarrow position by another animal experiencing a hormonal-period-induced bloody nose? Well, maybe someday elephants and/or dolphins will give you something to remember! An estimated price? That'll be 250 worth o' pudding, baby! With just this much lube, I know about what we're going to do: we're going through the alley, the alley, the alley... digger, you better have insurance! Grass-whoopin' insurance! And you about to pay a deductible!",
        "Do you find it... wisible... when I say the name... 'Biggus'... 'Brunchus'?",
        "The mill's closed. There's no more work. We're destitute. I've got no option but to sell you all for scientific experiments.",
        "The war machine persists: where is the asia man, where is the asia man?",
        "Perhaps the new norm for plague doctor fashion includes leather pants, silken shirts, and feather boas...",
        "You're my little potato, you're my little potato, you're my little potato, they dug you up, you come from underground!",
        "Stepping out on, the left, foot, stepping out on, the right, foot... I-I-I-I-I-want the-knife! I, I, I, I, I want, the knife!",
        "Brutal methods of execution have been recorded as follows: crucifixion, blood eagle, live burial, head-through-the-noose-on-fire...",
        "Hezekiel's whisker torture... ag ug-ug-ug-ug-ug! Get your chin-music on! Fo to the sho: big pimpin'!",
        "Meow means hungry, meow means thirsty, meow is the world of communication.",
        "Crucified; skinhead, skinhead! Swizzleberry swirl!",
        "Oh, friend... dear friend, you are so mercifully free of the ravages of intelligence - and, yes, I know to be sorry to say such nice things.",
        "100 years from now when I'm dying on a hospital bed and I'm asked what my biggest regret was it will be that I turned on my internet and scrolled through the internet on that fateful day... I will never be able to recover from this. No amount of therapy will save me. No amount of prescription pills will let me recover. I am a shell. This memory is so bad my brain is physically rejecting it and now I have a headache every time I think about it. Why did you post this, thinking it was a good idea? You've permanently ruined my life because of this, I hope you're happy. I hope that one day this gets branded as a war crime and you get hauled off to prison, never to see the light of day again. The fact that you're already not in a psych ward for insanity is so baffling I have lost all faith in every kind of justice system. If you subscribe to any religion, you'd best spend the rest of your time atoning for this ultimate sin. Have a terrible day, I hope this creation of yours haunts you in your dreams.",
        "Not funny I didn't laugh. Your joke is so bad I would have preferred the joke went over my head and you gave up re-telling me the joke. To be honest this is a horrid attempt at trying to get a laugh out of me. Not a chuckle, not a hehe, not even a subtle burst of air out of my esophagus. Science says before you laugh your brain preps your face muscles but I didn't even feel the slightest twitch. 0/10 this joke is so bad I cannot believe anyone legally allowed you to be creative at all. The amount of brain power you must have put into that joke has the potential to power every house on Earth. Get a personality and learn how to make jokes, read a book. I'm not saying this to be funny I genuinely mean it on how this is just bottom barrel embarrassment at comedy. You've single handedly killed humor and every comedic act on the planet. I'm so disappointed that society has failed as a whole in being able to teach you how to be funny. Honestly if I put in all my power and time to try and make your joke funny it would require Einstein himself to build a device to strap me into so I can be connected to the energy of a billion stars to do it, and even then all that joke would get from people is a subtle scuff. You're lucky I still have the slightest of empathy for you after telling that joke otherwise I would have committed every war crime in the book just to prevent you from attempting any humor ever again. We should put that joke in text books so future generations can be wary of becoming such an absolute comedic failure. Im disappointed, hurt, and outright offended that my precious time has been wasted in my brain understanding that joke. In the time that took I was planning on helping kids who have been orphaned, but because of that you've waisted my time explaining the obscene integrity of your terrible attempt at comedy. Now those kids are suffering without meals and there's nobody to blame but you. I hope you're happy with what you have done and I truly hope you can move on and learn from this piss poor attempt",
        "To be fair, you have to have a very high intelligence score to understand animism. The humor is extremely subtle, and without a solid grasp of historical theology most of the jokes will go over a typical viewer's head. There's also Sir Edward Taylor's anthropological outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from  literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny - they say something deep about LIFE. As a consequence people who dislike animism truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Sir Edward's anthropological catchphrase 'degeneration has been rather of a local than of a general character', which itself is a cryptic reference to Lucretius's Roman poetry. I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Sir Edward's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have an animism tattoo. And no, you cannot see it. It's for the ladies' eyes only - and even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand."
    ],
    SF = [
        "Pieces of huckleberry taffy? Oof-tah! Bowls of mini wheats & honey nut cheerios? Cute, cute! Glasses of grape juice, orange juice, chocolate milk, and pink lemonade? You're kidding! Well, if you're starving, how about some chocolate chip pancakes with chokecherry syrup? A good cooking! Guten apetit, thank you for our food, guten apetit!",
        "You mean to say, that you were all, alone? Interesting, if... true. Well I uhh... went to the store... to acquire the... cooking components... for the upcoming complex plot - and yes, we do like, bananas; because they, have no bones, today! Catch a falling star, and put it in your pocket, never let it fall away! Each star's a pool of water, cool water; and with the dawn I'll wake and yawn, and carry on to water; cool, clear water. Pass the shoe, pass the d'ree d'rah d'ree d'ray; pass the shoe, the shoe, d'ree d'rah d'ree d'ray! Uh-oh, uh-oh; What the heck is that; what the heck is that? Black hair with orange hair highlights, black eyes that sparkle like beetles, a voice that crackles, enveloped in smoky scents... a campfire waifu? You mystify me!? We do not hold ourselves accountable: it's an illusion! Get outta there, you're tripping balls! How negligee: it is not wise to project the posterior upon the sky. Get... get out of, of, of... of town! I triple dog dare you: if you go, you get the house, the boat, the car, the plane! Can't you hear them on the far-away waters? The looooons! The tower, of power! Would you like some... propane for your train? Sure wish we had some; but how about some... sauerkraut & brussel-sprout ice cream: yes, dear, i'll just have one scoop.",
        "Have you ever felt, that thing in your heart, that there may be this infinity sign out there in the sky, a god-head volume? That's called: the god-mass of dune.",
        "Four square! Slappy hands! Pillow pets! Anything goes! Wait, no wheezing the ju-uuiice!",
        "Get a look at that smear on the probability distribution bagel in the sky! It's my gypsee jamboree!",
        "Legend has it... until only then...",
        "Give your meat a good ol' rub... while I'll be in my studio, studio, working up some, art...",
        "Knowledge is power.",
        "Give us your counsel!",
        "Your mind includes multiple parts, and not all of them work together.",
        "Why don't you stop pretending to be in the para-olympics? They want you to give them a narrative!",
        "Don't harsh my gig so hardcore, 'k cruster?"
        "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
        "Oh my goodness! Well, you're used to it! You'd better believe it!",
        "Get with the program, rabbit! No, you don't have to delete it.",
        "Hey you: only teachers are allowed to say that word!",
        "Tarred-and-feathered? Hot-glue-gunned & toilet-papered? Don't think either appropriation can replace the original practice of mummification!",
        "Why not put some mint leaves behind your ear, and wait for the trunk-climbers you will soon hear?",
        "Caution; the following waifus/husbandos have been marked as dangerous to the security of commerce: giant hermit crab, hydra, kraken, jellyfish, stingray, murder hornet (i.e. multi-limbed - potentially mythical/invasive/bacteriophagic - aquatic/aerial creatures). In particular, the metaphorical sacrifice of birds/felines/snakes/etc. to any of these banned creatures in a coldly-efficient, sewer-like context will be regarded as more ethical than moral (as this appears to be a rather coarse appropriation of a mummification ritual), though cautious usage of any of these dangerous creatures within a small body of warm water may be deemed a choice of morality over ethics (as the atmosphere would represent somewhat of an artificial idyllic womb of obscured goals)...",
        "Be what you would seem to be — or, if you'd like it put more simply — never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.",
        "You drink owie-pop, I drink owie-pop, we all drink owie-pop!",
        "Let's give it up for l'Hopital! Tabular integration!"
    ]
];
const directions = [
    createDirection("1", "G", "fire", "celestial/angel"),
    createDirection("2", "C", "air", "fey/lycanthrope/dragon"),
    createDirection("3", "E", "water", "fiend/daemon/undead"),
    createDirection("4", "L", "earth", "construct/cybrid")
];
const quarters = [
    createQuarter("1", ["elven", "halfling", "gnome"], ["onshore wind", "solar", "solar wind"], "air/space force"),
    createQuarter("2", ["orc", "goblin"], ["offshore wind reactors", "nuclear fission"], "navy"),
    createQuarter("3", ["dwarven"], ["hydroelectric", "tidal/wave", "biofuel"], "coast guard + marines"),
    createQuarter("4", [], ["geothermic", "nuclear fusion", "biomass", "dyson swarm", "dyson sphere"], "army")
];
