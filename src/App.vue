<template>
  <div id="app" class="app">
     <rux-global-status-bar appName="Astro Vue Boilerplate">
      <rux-clock></rux-clock>
      <rux-segmented-button ref="themeSwitch" :data.prop="themes"></rux-segmented-button>
    </rux-global-status-bar>
    <rux-notification
      :open="notificationOpen"
      :closeAfter="notificationCloseDelay"
      :status="notificationStatus"
      :message="notificationMessage"
      >
    </rux-notification>
    <div class="app-main">
      <div class="app-sidebar">
        <rux-tree ref="tree" :data.prop="treeData"></rux-tree>
      </div>
      <div class="app-detail">
        <rux-accordion open>
          <span slot="label">Antenna DGS 2 - Weak signal</span>
          <span slot="content">
            Antenna DGS 2 has weak signal at 16:38:37.
            <div class="rux-button-group">
              <rux-button @click="investigateDGS2">Investigate</rux-button>
            </div>
          </span>
        </rux-accordion>
        <rux-accordion>
          <span slot="label">USA-151 - Solar panel misalignment</span>
          <span slot="content">USA-151 experienced solar panel misalignment at 16:57:45.</span>
        </rux-accordion>
        <rux-accordion>
          <span slot="label">USA-180 - Power degradation</span>
          <span slot="content">USA-180 suffered power degradation at 16:58:01.</span>
        </rux-accordion>
      </div>
    </div>
  </div>
</template>

<script>

const treeDataArray = [
  {
    label: 'Tree Item 1',
    expanded: true,
    children: [
      {
        label: 'Tree Item 1.1',
        children: [
          { label: 'Tree Item 1.1.1' },
          { label: 'Tree Item 1.1.2' },
          { label: 'Tree Item 1.1.3' },
        ],
      },
      { label: 'Tree Item 1.2' },
      {
        label: 'Tree Item 1.3',
        expanded: true,
        children: [
          {
            label: 'Tree Item 1.3.1',
            children: [
              { label: 'Tree Item 1.1.1' },
              { label: 'Tree Item 1.1.2' },
              { label: 'Tree Item 1.1.3' },
            ],
          },
          {
            label: 'Tree Item 1.3.2',
            children: [
              { label: 'Tree Item 1.1.1' },
              { label: 'Tree Item 1.1.2' },
              { label: 'Tree Item 1.1.3' },
            ],
          },
          {
            label: 'Tree Item 1.3.3',
            expanded: true,
            children: [
              { label: 'Tree Item 1.3.3.1' },
              { label: 'Tree Item 1.3.3.2', selected: true, },
              { label: 'Tree Item 1.3.3.3' },
            ],
          },
        ],
      },
      {
        label: 'Tree Item 1.4',
        children: [
          { label: 'Tree Item 1.4.1' },
          { label: 'Tree Item 1.4.2' },
          { label: 'Tree Item 1.4.3' },
        ],
      },
      { label: 'Tree Item 1.5' },
    ],
  },
  {
    label: 'Tree Item 2',
    children: [
      { label: 'Tree Item 2.1' },
      { label: 'Tree Item 2.2' },
      { label: 'Tree Item 2.3' },
    ],
  },
  {
    label: 'Tree Item 3',
  },
]; 
export default {
  name: 'app',
  data: function() {
    return {
      treeData: treeDataArray,
      themes: [
        { label: 'Light' },
        { label: 'Dark', selected: true }
      ],
      notificationOpen: false,
      notificationCloseDelay: 3000,
      notificationStatus: 'standby',
      notificationMessage: 'Investigating Antenna DGS 2.'
    }
  },
  methods: {
    investigateDGS2: function() {
      if (this.notificationOpen === false) {
        this.$nextTick(function () {
          this.notificationOpen = true;
            setTimeout(() => {
              this.notificationOpen = false;
            }, this.notificationCloseDelay);
        })
      }
    },
  }

}
</script>

<style lang="css">
/* @import '~astroux-static/css/astro.core.css'; */

/* if using CopyWebpackPlugin to load all the astroux-static stuff */
@import '/css/astro.core.css';

.app {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}
.app-main {
  display: flex;
  flex-flow: row nowrap;
  flex: 1 0 auto;
  border: 1px solid var(--colorTertiaryLighten1, rgb(83, 101, 121));
  margin: 1rem;
  position: relative;
  overflow: hidden;
}
.app-sidebar {
  flex: 0 1 16rem;
  border-right: 1px solid var(--colorTertiaryLighten1, rgb(83, 101, 121));
}
.app-detail {
    flex: 4 1 auto;
}
rux-global-status-bar {
  position: relative; /* un-sticky GSB */
}
.rux-button-group {
    margin-left: auto;
    align-self: flex-end;
}
rux-accordion [slot='content'] {
  display: contents; 
}

</style>
