<template>
  <div>
    <div class="header py-3 bg-gray-200">
      <div class="header-bottom">
        <div class="flex justify-center items-center">
          <ul class="menu">
            <li class="menu-item">
              <NuxtLink class="menu-link" to="/">Home</NuxtLink>
            </li>
            <li class="menu-item" v-if="!user">
              <NuxtLink class="menu-link" to="/register">Register</NuxtLink>
            </li>
            <li class="menu-item" v-if="!user">
              <NuxtLink class="menu-link" to="/login">Login</NuxtLink>
            </li>
            <li class="menu-item" v-if="!!user">
              <NuxtLink class="menu-link" to="/profile">Profile</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "~/stores/authStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const user = useSupabaseUser();
    return {
      authStore,
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_mixins.scss";
@import "@/assets/_extend.scss";
// Header Section Starts Here
.router-link-exact-active {
  color: hsl(var(--base));
  font-weight: 500;
}
.header {
  width: 100%;
  @extend %transition;
  z-index: 9999;
}
// Menu
.menu {
  @extend %flex;
  align-items: center;
  margin: 0;
  position: relative;
  > .has-submenu {
    .menu-text {
      padding-right: 20px !important;
    }
  }
  .sub-menu {
    .menu-item {
      width: 100%;
    }
  }
  .menu-item {
    .menu-link {
      font-family: var(--font-thin);
      @include breakpoint(lg) {
        font-family: var(--font-semibold);
      }
    }
    &.has-submenu > .menu-link {
      position: relative;
      display: flex;
      justify-content: space-between;
      &::after {
        @extend %font-ico;
        content: "\f107";
        right: 0;
        top: 52%;
        transform: translate(0, -50%);
        font-size: 16px;
      }
    }
  }
}

// Sub Menu (Desktop Menu)
@include breakpoint(lg) {
  .menu-item {
    position: relative;
    &:hover > .sub-menu {
      visibility: visible;
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  .menu {
    gap: 0 40px;
  }
  .menu > .menu-item > .menu-link {
    padding: 12px 8px;
    &.active {
      color: hsl(var(--base));
    }
  }

  .menu-item {
    &:hover > .sub-menu {
      visibility: visible;
      opacity: 1;
      transform: translate(0%, 0);
    }
  }
}
</style>