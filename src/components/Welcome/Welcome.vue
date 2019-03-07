<!-- Add "scoped" attribute to limit CSS to this component only -->
<template>
  <div class="hello">
    <div class="logo">
      <img src="https://img.icons8.com/color/96/000000/connectdevelop.png">
      <h2 class="brand">TEKINTOSH</h2>
    </div>
    <div class="boot-messages">
      <div class="content">
        <section v-animate-css="{
          classes: 'fadeIn',
          delay: 200,
          duration: 100,
          iteration: '1',
          }">
          # If you change this file, run 'update-grub' afterwards to update <br/>
          # /boot/grub/grub.cfg.<br/>
          # For full documentation of the options in this file, see:<br/>
          #   info -f grub -n 'Simple configuration'<br/><br/>
        </section>
        <section v-animate-css="{
          classes: 'fadeIn',
          delay: 350,
          duration: 100,
          iteration: '1',
          }">
          GRUB_DEFAULT=0<br/>
          GRUB_TIMEOUT_STYLE=hidden<br/>
          GRUB_TIMEOUT=0<br/>
          GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`<br/>
          GRUB_CMDLINE_LINUX_DEFAULT="console=tty1 console=ttyS0"<br/>
          GRUB_CMDLINE_LINUX=""<br/>
        </section>
        <section v-animate-css="{
          classes: 'fadeIn',
          delay: 750,
          duration: 100,
          iteration: '1',
          }">
          # Uncomment to enable BadRAM filtering, modify to suit your needs<br/>
          # This works with Linux (no patch required) and with any kernel that obtains<br/>
          # the memory map information from GRUB (GNU Mach, kernel of FreeBSD ...)<br/>
          #GRUB_BADRAM="0x01234567,0xfefefefe,0x89abcdef,0xefefefef"<br/><br/>

          # Uncomment to disable graphical terminal (grub-pc only)<br/>
          #GRUB_TERMINAL=console<br/>
        </section>
        <section v-animate-css="{
          classes: 'fadeIn',
          delay: 1200,
          duration: 100,
          iteration: '1',
          }">
          # The resolution used on graphical terminal<br/>
          # note that you can use only modes which your graphic card supports via VBE<br/>
          # you can see them in real GRUB with the command `vbeinfo'<br/>
          #GRUB_GFXMODE=640x480<br/>
        </section>
        <section v-animate-css="{
          classes: 'fadeIn',
          delay: 2000,
          duration: 100,
          iteration: '1',
          }">
          # Uncomment if you don't want GRUB to pass "root=UUID=xxx" parameter to Linux<br/>
          #GRUB_DISABLE_LINUX_UUID=true<br/><br/>

          # Uncomment to disable generation of recovery mode menu entries<br/>
          #GRUB_DISABLE_RECOVERY="true"<br/><br/>

          # Uncomment to get a beep at grub start<br/>
          #GRUB_INIT_TUNE="480 440 1"
        </section>
      </div>
    </div>
    <div class="grid-2-3">
      <Leftpane/>
      <Rightpane/>
    </div>
  </div>
</template>

<style src='./Welcome.css' scoped></style>
<script src="./Welcome.js"></script>
