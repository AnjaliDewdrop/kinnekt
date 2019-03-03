import pygame
from math import pi
import pyscreenshot as ImageGrab
from Naked.toolshed.shell import execute_js




def getImg(x1=0,y1=0,x2=1,y2=1):
    im = ImageGrab.grab(bbox=(x1, y1, x2, y2)) # X1,Y1,X2,Y2
    return im


# Initialize the game engine
pygame.init()

# Set the height and width of the screen
#screen = pygame.display.set_mode(400,300)
screen = pygame.display.set_mode([650,360])

class Box(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((60,40))
        self.rect = self.image.get_rect()
        self.rect.centerx = 100
        self.rect.centery = 130
        self.image.fill((255,255,0))
    def update(self):
        self.rect.centery += 0
        self.rect.centerx += 0

class DrawLine():
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        #(x,y) = pygame.mouse.get_pos()
        self.startLine = True
        self.x = 0
        self.y = 0
    def draw(self):
        #if self.startLine:
            #(self.x, self.y) = pygame.mouse.get_pos()
        pygame.draw.line(screen, (0,0,0), [self.x, self.y], pygame.mouse.get_pos(), 2)
        (self.x, self.y) = pygame.mouse.get_pos()
        #screen.fill((0,0,0), (pygame.mouse.get_pos(), (1,1)))

class Label(pygame.sprite.Sprite):
    """Label Class (simplest version
        Atttributes :
            font: any pygame Font or SysFont object
            text:  text to display
            center:  desired positon of label center (x,y)
    """
    def __init__(self, colour = (0,0,0)):
        pygame.sprite.Sprite.__init__(self)
        self.font = pygame.font.SysFont("None", 30)
        self.text = "Submit"
        self.location= (100,130)  #hey, u there
        self.colour = colour
        self.image = self.font.render(self.text, 1, self.colour)
        self.rect = self.image.get_rect()
        self.rect.center = self.location


    def update(self):
        self.image = self.font.render(self.text, 1, self.colour)
        self.rect = self.image.get_rect()
        self.rect.center = self.location

def Main():
    pygame.display.set_caption("Circuit Challenge")
    #titlePage = pygame.image.load("bg.png")
    screen.blit(pygame.image.load("bg.png"), (0,0))
    #Loop until the user clicks the close button.
    done = False
    prevX = 0
    prevY = 0
    #screen.fill([255,255,255]) #screen.fill(image)
    drawB = False
    count = 0
    #img = DrawLine()
    playDra = DrawLine()#50,50,150,100)
    hitButtonLoc = [300,300,60,35]
    pygame.draw.rect(screen, (255,255,100), hitButtonLoc )
    #yosh = Box()
    #label = Label()
    
    #buttonSprites = pygame.sprite.Group(label,yosh)
    clock = pygame.time.Clock()
    while not done:
    
        # This limits the while loop to a max of 10 times per second.
        # Leave this out and we will use all CPU we can.
        clock.tick(100)
        
        for event in pygame.event.get(): # User did something
            if event.type == pygame.QUIT: # If user clicked close
                done=True # Flag that we are done so we exit this loop
            if event.type == pygame.MOUSEBUTTONDOWN:
                (playDra.x,playDra.y) = pygame.mouse.get_pos()
                drawB = True

            if event.type == pygame.MOUSEBUTTONUP:
                drawB = False
                
        if drawB:
            playDra.draw()


        
        (x,y)=pygame.mouse.get_pos()
        if event.type == pygame.MOUSEBUTTONUP and x>300 and x<360 and y>300 and y<340:
            pygame.draw.rect(screen, (255,255,255), hitButtonLoc )
            rect = pygame.Rect(0,0,650,360)
            sub = screen.subsurface(rect)
            pygame.image.save(sub, "screenshot.png")
            success = execute_js('sample.js')

            if count<2 and x!=prevX and y!=prevY:
                print ("Incorrect")
                count+=1
                prevX = x
                prevY = y
            elif x!=prevX and y!=prevY:
                print ("Correct")
                prevX = x
                prevY = y
            screen.blit(pygame.image.load("bg.png"), (0,0))#screen.fill([255,255,255])
            pygame.draw.rect(screen, (255,255,100), hitButtonLoc )
        
        #buttonSprites.clear(screen, (255,255, 0))
        #buttonSprites.update()
        pygame.draw.rect(screen, (255,255,100), hitButtonLoc )
        pygame.display.flip()
 
# Be IDLE friendly


if __name__ == "__main__":
    Main()



#send text file, right/wrong, 
#when they press submit, use picture and send to other program
#py screen shot
# save entry
# put path to img