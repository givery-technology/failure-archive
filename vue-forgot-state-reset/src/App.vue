<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="column">
          <label>組織名 (selected: {{ organizationId }})</label>
          <select
            v-model="organizationId"
            v-on:change="onSelectOrganization();"
          >
            <option
              v-for="org in organizations"
              v-bind:value="org.id"
            >
              {{ org.name }}
            </option>
          </select>
        </div>
        <div class="column">
          <label>プロジェクト名 (selected: {{ projectId }})</label>
          <select
            v-model="projectId"
            v-on:change="onSelectProject();"
          >
            <option
              v-for="proj in projects"
              v-bind:value="proj.id"
            >
              {{ proj.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h5>送信対象選択</h5>
          <div v-for="mem in members">
            <input
              type="checkbox"
              v-model="selected"
              v-bind:value="mem.email"
              v-bind:id="`member-${mem.id}`"
            >
              <label
                class="label-inline"
                v-bind:for="`member-${mem.id}`"
              >
                {{ mem.email }}</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h5>送信対象 (selected の中身)</h5>
          <ul>
            <li v-for="item in selected">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Organizations, Projects, ProjectMembers } from './data';

export default {
  name: 'App',
  data() {
    return {
      organizations: [],
      projects: [],
      members: [],
      selected: [], // 今回問題になった state
      organizationId: null,
      projectId: null,
    };
  },
  created() {
    this.organizations = Organizations;
  },
  methods: {
    onSelectOrganization() {
      if (this.organizationId === null) {
        this.projects = [];
      }
      this.projects = Projects.filter((p) => p.organizationId === this.organizationId);
    },
    onSelectProject() {
      if (this.projectId === null) {
        this.members = [];
      }
      this.members = ProjectMembers.filter((m) => m.projectId === this.projectId);
    },
  },
}
</script>

<style>
#app {
  margin-top: 2.8rem;
}
.column.centerize {
  text-align: center;
}
.column > h5 {
  margin-top: 2.2rem;
}
</style>
